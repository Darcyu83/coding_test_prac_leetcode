// this one is east to understand and explain
export function largestRectangleAreaPassed(heights: number[]): number {
  const stack: [number, number][] = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let start = i;

    const currH = heights[i];
    while (stack.length > 0 && stack[stack.length - 1][1] > currH) {
      const [index, height] = stack.pop()!;
      maxArea = Math.max(maxArea, height * (i - index));
      start = index;
    }

    stack.push([start, currH]);
  }

  for (const [index, height] of stack) {
    maxArea = Math.max(maxArea, height * (heights.length - index));
  }

  return maxArea;
}

/**
 * Analyzing + NSL/NSR Algorithm : O(n)
 * 전체 배열(히스토그램)의 특정 요소를 기준으로 왼쪽과 오른쪽에 대해서 해당 알고리즘을 바탕으로
 * 가장 가까운 작은 요소의 위치를 찾아 이를 저장한다
 * 그 다음엔 전체 요소에 대해서 다음 식을 반복하는데, 해당 식은
 * (현재 요소의 높이 * (해당 요소의 가장 가까운 오른쪽의 값 - 해당 요소의 가장 가까운 왼쪽의 값 - 1)이다.
 * */

export function largestRectagleAreaWithAnalysis(heights: number[]) {
  let maxArea = 0;
  let nearestMinLeft = [],
    nearestMinRight = [];
  let stack = [];

  function NSL(nums: number[]) {
    const nearestMinLeft = [];
    const stack = [];

    // index move like left To right but find value on the left side
    for (let i = 0; i < nums.length; i++) {
      while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) {
        stack.pop();
      }
      nearestMinLeft[i] = stack[stack.length - 1] ?? -1;
      stack.push(i);
    }

    return nearestMinLeft;
  }

  function NSR(nums: number[]) {
    const nearestMinRight = [];
    const stack = [];
    // index move like left To right but find value on the right side
    for (let i = nums.length - 1; i >= 0; i--) {
      while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) {
        stack.pop();
      }

      nearestMinRight[i] = stack[stack.length - 1] ?? nums.length;
      stack.push(i);
    }

    return nearestMinRight;
  }

  nearestMinLeft = NSL(heights);
  nearestMinRight = NSR(heights);

  /// 자신의 높이 * (오른쪽의 가장 가까운 작은 값 인덱스 - 왼쪽의 가장 가까운 작은 값 인덱스 - 1)
  for (let i = 0; i < heights.length; i++) {
    const h = heights[i];
    const w = nearestMinRight[i] - nearestMinLeft[i] - 1;
    maxArea = Math.max(maxArea, h * w);
  }

  return maxArea;
}

// better performance
export function largestRectangleArea2Passed(heights: number[]): number {
  const stack: number[] = []; // Stack stores indices
  let maxArea = 0;

  // length + 1 runs
  for (let i = 0; i < heights.length + 1; i++) {
    const currHeight = i < heights.length ? heights[i] : 0;

    while (stack.length > 0 && heights[stack[stack.length - 1]] > currHeight) {
      const height = heights[stack.pop()!]; // Pop top
      const width = stack.length > 0 ? i - stack[stack.length - 1] - 1 : i;
      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
}
