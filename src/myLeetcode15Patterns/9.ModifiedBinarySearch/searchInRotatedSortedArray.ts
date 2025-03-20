export function search1(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    // till finding target
    if (nums[mid] === target) return mid;

    // left side sorted in Acesding order
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        // [... left , mid, ...right]
        // in left side ;
        right = mid - 1;
      } else {
        // in right side ;
        left = mid + 1;
      }
    } else {
      // Not sorted in Acesding order
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

function search(nums: number[], target: number): number {
  // O(n) X
  // return nums.indexOf(target);

  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    const isLeftSideSorted = nums[left] <= nums[mid];
    if (isLeftSideSorted) {
      // CASE1 :  left half is sorted
      // if (target >= nums[left] && target < nums[mid]) {

      const isTargetInLeft = target >= nums[left] && target < nums[mid];
      if (isTargetInLeft) {
        right = mid - 1; // Move left
      } else {
        left = mid + 1; // Move right
      }
    } else {
      // CASE2 :  Right half is sorted
      // if (target > nums[mid] && target <= nums[right]) {
      const isTargetInRight = target > nums[mid] && target <= nums[right];
      if (isTargetInRight) {
        left = mid + 1; // Move right
      } else {
        right = mid - 1; // Move left
      }
    }
  }

  return -1;
}

function searchRecursive(
  nums: number[],
  target: number,
  start: number = 0,
  end: number = nums.length - 1
): number {
  const mid = start + Math.floor((end - start) / 2);

  if (nums[mid] === target) {
    return mid;
  }

  if (end <= start) return -1;

  // Left half is sorted
  if (nums[start] <= nums[mid]) {
    if (nums[start] <= target && target < nums[mid]) {
      return searchRecursive(nums, target, start, mid - 1);
    } else {
      return searchRecursive(nums, target, mid + 1, end);
    }
  } else {
    if (nums[mid] < target && target <= nums[end]) {
      return searchRecursive(nums, target, mid + 1, end);
    } else {
      return searchRecursive(nums, target, start, mid - 1);
    }
  }
}
