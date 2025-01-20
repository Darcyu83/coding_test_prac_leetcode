export function runningSum(nums: number[]): number[] {
  const sums: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(
      "sums ==== ",
      sums,
      sums[i],
      sums[i - 1] ?? 0,
      nums[i],

      "\n",
      sums[i - 1] ?? 0 + nums[i]
    );

    sums[i] = (sums[i - 1] ?? 0) + nums[i];
  }

  return sums;
}

