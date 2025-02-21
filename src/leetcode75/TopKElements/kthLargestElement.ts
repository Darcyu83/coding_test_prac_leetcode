export function findKthLargest(nums: number[], k: number): number {
  return -1;
}

export function findKthLargest1(nums: number[], k: number): number {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const minNum = Math.min(...nums);
  const maxNum = Math.max(...nums);

  let count = 0;

  for (let i = maxNum; i >= minNum; i--) {
    if (map.has(i)) {
      count += map.get(i);
    }

    if (count >= k) {
      return i;
    }
  }

  return -1;
}

// QuickSelect Algorithm : X  (TLE: Time Limit Exceeded)
// duplicate values
export function findKthLargest2(nums: number[], k: number): number {
  const targetIndex = nums.length - k;

  function partition(left: number, right: number): number {
    const pivot = nums[right];
    let i = left;

    for (let j = left; j < right; j++) {
      if (nums[j] <= pivot) {
        // swap elements
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
  }

  function quickSelect(left: number, right: number): number {
    const pivotIndex = partition(left, right);
    if (pivotIndex === targetIndex) {
      return nums[pivotIndex];
    } else if (pivotIndex < targetIndex) {
      return quickSelect(pivotIndex + 1, right);
    } else {
      return quickSelect(left, pivotIndex - 1);
    }
  }

  return quickSelect(0, nums.length - 1);
}

// QuickSelect Algorithm
export function findKthLargest3(nums: number[], k: number): number {
  const targetIndex = nums.length - k;

  function partition(left: number, right: number): [number, number] {
    const randomIndex = left + Math.floor(Math.random() * (right - left + 1));

    [nums[randomIndex], nums[right]] = [nums[right], nums[randomIndex]];

    const pivot = nums[right];
    let i = left,
      j = left,
      n = right;

    while (j <= n) {
      if (nums[j] < pivot) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j++;
      } else if (nums[j] > pivot) {
        [nums[j], nums[right]] = [nums[right], nums[j]];
        n--;
      } else {
        j++;
      }
    }

    return [i, n];
  }

  function quickSelect(left: number, right: number): number {
    const [low, high] = partition(left, right);
    if (targetIndex >= low && targetIndex <= high) {
      return nums[targetIndex];
    } else if (targetIndex < low) {
      return quickSelect(left, low - 1);
    } else {
      return quickSelect(high + 1, right);
    }
  }

  return quickSelect(0, nums.length - 1);
}
