export function maxArea(height: number[]): number {
  let left = 0,
    right = height.length - 1;
  let maxAmount = 0;

  while (left < right) {
    const w = right - left;
    const h = Math.min(height[left], height[right]);

    if (height[left] < height[right]) left++;
    else right--;

    maxAmount = Math.max(maxAmount, w * h);
  }
  return maxAmount;
}
