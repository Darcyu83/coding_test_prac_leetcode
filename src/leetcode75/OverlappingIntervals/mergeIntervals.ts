function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const maxEnd = result[result.length - 1][1];
    if (maxEnd >= intervals[i][0]) {
      result[result.length - 1][1] = Math.max(maxEnd, intervals[i][1]);
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
}
