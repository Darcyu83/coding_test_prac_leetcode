function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval[0] > newInterval[1]) {
      // CASE 1: No overlap & `newInterval` should come before `interval`
      result.push(newInterval);
      result.push(...intervals.slice(i));

      return result;
    } else if (newInterval[0] > intervals[i][1]) {
      // CASE 2: No overlap & `interval` comes before `newInterval`
      result.push(interval);
    } else {
      // CASE 3: Overlapping intervals → Merge `interval` into `newInterval`
      newInterval = [
        Math.min(newInterval[0], intervals[i][0]),
        Math.max(newInterval[1], intervals[i][1]),
      ];
    }
  }

  result.push(newInterval);

  // let i = 0;

  // // CASE 1: The current interval does NOT overlap with newInterval and comes BEFORE it.
  // while (i < intervals.length && intervals[i][1] < newInterval[0]) {
  //   result.push(intervals[i]);
  //   i++;
  // }

  // // CASE 2: The current interval OVERLAPS with newInterval.
  // while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
  //   newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
  //   newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
  //   i++;
  // }

  // result.push(newInterval);

  // // CASE 3: The remaining intervals do NOT overlap and come AFTER newInterval.
  // while (i < intervals.length) {
  //   result.push(intervals[i]);
  // }

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
