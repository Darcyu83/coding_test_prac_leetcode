function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval[0] > newInterval[1]) {
      result.push(newInterval);
      intervals.slice(i).forEach((interval) => result.push(interval));

      return result;
    } else if (newInterval[0] > intervals[i][1]) {
      result.push(interval);
    } else {
      newInterval = [
        Math.min(newInterval[0], intervals[i][0]),
        Math.max(newInterval[1], intervals[i][1]),
      ];
    }
  }

  result.push(newInterval);

  return result;
}

function insert1(intervals: number[][], newInterval: number[]): number[][] {
  let sortedInterval = [...intervals, newInterval].sort(
    (a, b) => a[0] - b[0] || a[1] - b[1]
  );

  let output = [sortedInterval[0]];

  for (let i = 1; i < sortedInterval.length; i++) {
    let [cStart, cEnd] = output[output.length - 1];
    if (sortedInterval[i][0] <= cEnd) {
      output.pop();
      output.push([cStart, Math.max(sortedInterval[i][1], cEnd)]);
    } else {
      output.push(sortedInterval[i]);
    }
  }

  return output;
}

function insert2(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];
  let [newStart, newEnd] = newInterval;
  let inserted = false;

  for (const [start, end] of intervals) {
    if (end < newStart) {
      result.push([start, end]);
    } else if (start > newEnd) {
      if (!inserted) {
        result.push([newStart, newEnd]);
        inserted = true;
      }

      result.push([start, end]);
    } else {
      newStart = Math.min(newStart, start);
      newEnd = Math.max(newEnd, end);
    }
  }

  if (!inserted) {
    result.push([newStart, newEnd]);
  }

  return result;
}

function insert22(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];
  let [newStart, newEnd] = newInterval;
  let inserted = false;

  for (const [start, end] of intervals) {
    // Case 1: The current interval is completely before the new interval
    const isNonOverlappingBefore = end < newStart;

    // Case 2: The current interval is completely after the new interval
    const isNonOverlappingAfter = start > newEnd;

    // Case 3: The intervals overlap, merge them
    // const isOverlapping = !isNonOverlappingBefore && !isNonOverlappingAfter;
    const isOverlapping = start <= newEnd && end >= newStart;

    if (isNonOverlappingBefore) {
      result.push([start, end]);
    } else if (isNonOverlappingAfter) {
      if (!inserted) {
        result.push([newStart, newEnd]);
        inserted = true;
      }
      result.push([start, end]);
    } else if (isOverlapping) {
      newStart = Math.min(newStart, start);
      newEnd = Math.max(newEnd, end);
    }

    // if (end < newStart) {
    //   result.push([start, end]);
    // } else if (start > newEnd) {
    //   if (!inserted) {
    //     result.push([newStart, newEnd]);
    //     inserted = true;
    //   }

    //   result.push([start, end]);
    // } else {
    //   newStart = Math.min(newStart, start);
    //   newEnd = Math.max(newEnd, end);
    // }
  }

  if (!inserted) {
    result.push([newStart, newEnd]);
  }

  return result;
}
