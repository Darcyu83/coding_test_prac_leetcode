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
