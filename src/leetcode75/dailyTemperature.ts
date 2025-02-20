export function dailyTemperatures(temperatures: number[]): number[] {
  // const nextGreater = new Map<number, number | null>();

  const answer = new Array(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const index = stack.pop()!;
      answer[index] = i - index;
    }

    // nextGreater.set(temperatures[i], stack.length > 0 ? i : null);
    //    nextGreater.set(temperatures[i], stack.length > 0 ? stack[stack.length - 1] : 0);
    // stack.push(temperatures[i]);
    stack.push(i);
  }

  return answer;
}
