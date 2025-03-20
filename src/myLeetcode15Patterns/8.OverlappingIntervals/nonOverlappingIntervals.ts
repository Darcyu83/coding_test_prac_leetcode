export function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length <= 1) return 0;

  intervals.sort((a, b) => a[1] - b[1]);
  let prevEnd = intervals[0][1];
  let cnt = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) {
      cnt++;
      continue;
    }

    prevEnd = intervals[i][1];
  }

  return cnt;
}
