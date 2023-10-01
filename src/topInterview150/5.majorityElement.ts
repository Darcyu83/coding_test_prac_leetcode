export function majorityElement(nums: number[]): number {
  let count = 1;
  let major = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      count++;
      major = nums[i];
    } else if (nums[i] === major) {
      count++;
    } else {
      count--;
    }
  }

  return major;
}
