function findMaxAverage(nums: number[], k: number): number {
  let windowSum = nums.slice(0, k).reduce((acc, val) => {
    return acc + val;
  }, 0);

  let maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];

    maxSum = Math.max(maxSum, windowSum);
  }

  return Math.round((maxSum / k) * 100000) / 100000;
}
