import path from "path";

const filePath = path.join(__dirname, "lotteryNumbers.txt");
const prevNums: number[][] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el: string) =>
    el
      .trim()
      .replace(/[\n\t\r\f\v\b\\]/g, " ")
      .split(" ")
      .filter((str) => !isNaN(Number(str)) && !!Number(str))
      .map(Number)
  );

const GAME_QNTY = 5;
const NUM_SELECT_QNTY = 5;
const selectRandomNums = (nums: number[], qnty = 6) => {
  if (qnty > nums.length) {
    throw new Error("선택할 숫자가 부족합니다.");
  }
  const newGame: number[] = [];
  const shuffled = [...nums.sort(() => Math.random() - 0.5)];
  for (let i = 0; i < qnty; i++) {
    const randomIdx = Math.floor(Math.random() * shuffled.length);
    newGame.push(...shuffled.splice(randomIdx, 1));
  }
  const ordered = newGame.sort((a, b) => a - b);
  return ordered;
};

const lotteryNumPool = Array.from({ length: 45 }).map((_, index) => index + 1);
const makeLottery5GamesWithoutNumbersInFirstGame = (prevGames: number[][]) => {
  const alreadySlected = prevGames.reduce((set, gameNums) => {
    gameNums.forEach((num) => set.add(num));
    return set;
  }, new Set<number>());

  const restedNums = lotteryNumPool.filter((num) => !alreadySlected.has(num));

  let newGames: number[][] = [];
  for (let i = 0; i < GAME_QNTY; i++) {
    newGames.push(selectRandomNums(restedNums));
  }

  for (let i = 0; i < Math.ceil(Math.random() * GAME_QNTY); i++) {
    const numIdx = Math.floor(Math.random() * NUM_SELECT_QNTY);
    const selectedNumArr = Array.from(alreadySlected);
    const numSwapped =
      selectedNumArr[Math.floor(Math.random() * selectedNumArr.length)];

    console.log("numSwapped ==== ", numSwapped);
    newGames[i][numIdx] = numSwapped;

    newGames[i] = newGames[i].sort((a, b) => a - b);
  }
  return newGames;
};

console.log("prevNums ==== ", prevNums);

export default () => makeLottery5GamesWithoutNumbersInFirstGame(prevNums);

// console.time("lotto");
// const lottoDrawing = [10, 16, 19, 27, 37, 38];
// let isMatched = false;

// const selectNum = () => {
//   return Math.ceil(Math.random() * 45);
// };
// while (!isMatched) {
//   const [a, b, c, d, e, f] = [
//     selectNum(),
//     selectNum(),
//     selectNum(),
//     selectNum(),
//     selectNum(),
//     selectNum(),
//   ];
//   const [a1, b1, c1, d1, e1, f1] = lottoDrawing;
//   if (a === a1 && b === b1 && c === c1 && d === d1 && e === e1 && f === f1)
//     isMatched = true;
// }

// console.timeEnd("lotto");
