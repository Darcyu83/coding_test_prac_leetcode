export function removeDuplicates2(nums: number[]): number {
  let currIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (currIdx < 2 || num > nums[currIdx - 2]) nums[currIdx++] = num;
  }

  return currIdx;
}
