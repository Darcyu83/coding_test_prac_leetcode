export function dailyTemperatures(temperatures: number[]): number[] {
  // const nextGreater = new Map<number, number | null>();

  const answer = new Array(temperatures.length).fill(0);
  const unhandledIdx: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      unhandledIdx.length > 0 &&
      temperatures[i] > temperatures[unhandledIdx[unhandledIdx.length - 1]]
    ) {
      const index = unhandledIdx.pop()!;
      answer[index] = i - index;
    }

    unhandledIdx.push(i);
  }

  return answer;
}
