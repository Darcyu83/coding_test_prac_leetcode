function twoSum(numbers: number[], target: number): number[] {
  let result: number[] = [];
  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (target === sum) {
      result = [left + 1, right + 1];
      break;
    }

    if (sum < target) left++;
    if (sum > target) right++;
  }

  return result;
}
