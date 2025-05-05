// 순차적 대소 비교
// 스트림내에서 단일값에 대해 가장 가까운 최소값 / 최대값을 찾을 때
// + 전체 데이터에서 그다음 나오는 가장 가까운 작은값 / 큰값을 찾을 때

// NSL : Nearest Smaller to left
// NSR : Nearest Smaller to right

// Monotonic Stack Algorithm
// leetcode : 84 , largestRectangleArea

// width = NSR[i] - NSL[i] - 1 => 여기에 적용하기 위해
// area = height[i] * width

// Complexity
// Brute force : O(n^2)
// Solution : O(n)
const array = [4, 5, 2, 10, 8];
const findNearestSmallerVallue = (nums: number[]) => {
  const result = Array(nums.length).fill(-1);

  const stack: number[] = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] >= nums[i]) {
      stack.pop();
    }

    if (stack.length) {
      result[i] = stack[stack.length - 1];
    }

    stack.push(nums[i]);
  }

  return result;
};

// GPT - NSL
function nearestSmallerToLeft(arr: number[]) {
  const stack: number[] = [];
  const result: number[] = [];

  // NSL vs NSR just for-loop direction changes
  for (let i = 0; i < arr.length; i++) {
    // popping equals or greater one
    while (stack.length && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }

    result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
    stack.push(arr[i]);
  }

  return result;
}

// GPT - NSR
function nearestSmallerToRight(arr: number[]) {
  const stack: number[] = [];
  const result: number[] = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);

    stack.push(arr[i]);
  }
}
