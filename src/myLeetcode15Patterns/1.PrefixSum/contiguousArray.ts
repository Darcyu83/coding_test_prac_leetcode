export function findMaxLength(nums: number[]): number {
  let zeroCnt = 0,
    oneCnt = 0;
  let maxLength = 0;

  //<number, number> = <diff, index>
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeroCnt++;
    else oneCnt++;

    if (!map.has(oneCnt - zeroCnt)) map.set(oneCnt - zeroCnt, i);

    // if (oneCnt === zeroCnt) {
    //   maxLength = oneCnt + zeroCnt;
    // } else {
    const idx = map.get(oneCnt - zeroCnt) || 0;
    maxLength = Math.max(maxLength, i - idx);
    // }
  }
  return maxLength;
}
