// 1 Top-down
// 2 Bottom-up
// 3 Binary Search

/**
 * Complexity
Time complexity:

topDownSolution: O(n2) (due to recursive calls and memoization)
bottomUpSolution: O(n2) (nested loops for each pair of elements)
binarySearchSolution: O(nlogn) (binary search for each element)

Space complexity:

topDownSolution: O(n) (for the memo array and recursion stack)
bottomUpSolution: O(n) (for the memo array)
binarySearchSolution: O(l), where l is the length of the LIS (in the worst case, l=n)

**/
export function lengthOfLIS(nums: number[]): number {
  return topDownSolution(nums);
  // return bottomUpSolution(nums);
  // return binarySearchSolution(nums);
}

// TLE(Time Limit Exceeded)
const binarySearchSolution = (nums: number[]): number => {
  const memo: number[] = [];
  for (const num of nums) {
    let left = 0,
      right = memo.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (memo[mid] < num) {
        console.log(memo, mid, left, right);
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left < memo.length) {
      memo[left] = num;
    } else {
      memo.push(num);
    }
  }

  return memo.length;
};

const bottomUpSolution = (nums: number[]): number => {
  const memo: number[] = [];

  let max = 1;

  memo[nums.length - 1] = 1;

  for (let right = nums.length - 2; right >= 0; right--) {
    let maxSequence = 0;
    for (let left = right; left < nums.length; left++) {
      if (nums[right] < nums[left]) {
        maxSequence = Math.max(maxSequence, memo[left]);
      }

      memo[right] = 1 + maxSequence;
      max = Math.max(max, memo[right]);
    }
  }

  return max;
};

const topDownSolution = (nums: number[]): number => {
  const memo: number[] = [];

  function LISByIndex(index: number): number {
    if (!memo[index]) {
      let maxSize = 1;
      for (let i = index + 1; i < nums.length; i++) {
        if (nums[index] < nums[i]) {
          const size = 1 + LISByIndex(i);
          maxSize = Math.max(maxSize, size);
        }
      }
      memo[index] = maxSize;
    }

    return memo[index];
  }

  let maxSize = 0;

  for (let i = 0; i < nums.length; i++) {
    const size = LISByIndex(i);
    maxSize = Math.max(maxSize, size);
  }

  return maxSize;
};
