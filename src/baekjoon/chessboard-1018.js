// const input = require("fs")
//   .readFileSync(0, "utf8")
//   .toString()
//   .trim()
//   .split("\n");

// const input = [
//   "11 12",
//   "BWWBWWBWWBWW",
//   "BWWBWBBWWBWW",
//   "WBWWBWBBWWBW",
//   "BWWBWBBWWBWW",
//   "WBWWBWBBWWBW",
//   "BWWBWBBWWBWW",
//   "WBWWBWBBWWBW",
//   "BWWBWBWWWBWW",
//   "WBWWBWBBWWBW",
//   "BWWBWBBWWBWW",
//   "WBWWBWBBWWBW",
// ];

// const input = [
//   "10 13",
//   "BBBBBBBBWBWBW",
//   "BBBBBBBBBWBWB",
//   "BBBBBBBBWBWBW",
//   "BBBBBBBBBWBWB",
//   "BBBBBBBBWBWBW",
//   "BBBBBBBBBWBWB",
//   "BBBBBBBBWBWBW",
//   "BBBBBBBBBWBWB",
//   "WWWWWWWWWWBWB",
//   "WWWWWWWWWWBWB",
// ];

const input = [
  "9 23",
  "BBBBBBBBBBBBBBBBBBBBBBB",
  "BBBBBBBBBBBBBBBBBBBBBBB",
  "BBBBBBBBBBBBBBBBBBBBBBB",
  "BBBBBBBBBBBBBBBBBBBBBBB",
  "BBBBBBBBBBBBBBBBBBBBBBB",
  "BBBBBBBBBBBBBBBBBBBBBBB",
  "BBBBBBBBBBBBBBBBBBBBBBB",
  "BBBBBBBBBBBBBBBBBBBBBBB",
  "BBBBBBBBBBBBBBBBBBBBBBW",
];

export const getMinFixedPointOnChessBorad = () => {
  const [N, M] = input[0].trim().split(" ").map(Number);
  const strings = input.slice(1);

  const SIZE = { x: 8, y: 8 };
  let min = SIZE.x * SIZE.y;

  for (let y = 0; y <= N - SIZE.y; y++) {
    for (let x = 0; x <= M - SIZE.x; x++) {
      let startWithB = 0;
      let startWithW = 0;

      for (let rowIdx = y; rowIdx < y + SIZE.y; rowIdx++) {
        const str = strings[rowIdx].substring(x, x + SIZE.x);

        if (str.length < 8) throw Error("글자수 부족");

        for (let strIdx = 0; strIdx < SIZE.x; strIdx++) {
          const isStartWithB = strIdx % 2 === 0 ? "B" : "W";
          const isStartWithW = strIdx % 2 === 0 ? "W" : "B";

          if (str[strIdx] === isStartWithB) startWithB++;
          if (str[strIdx] === isStartWithW) startWithW++;
        }
      }

      min = Math.min(min, startWithB, startWithW); // Update the minimum changes needed
    }
  }

  console.log(min);
};

