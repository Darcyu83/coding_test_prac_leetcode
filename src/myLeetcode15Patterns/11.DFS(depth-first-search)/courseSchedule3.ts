import { MaxPriorityQueue } from "datastructures-js";

// Greedy + Max Heap
function scheduleCourse(courses: number[][]): number {
  // Sort courses by their last date
  // considering the most urgent courses first
  courses.sort(
    ([duration1, lastDay1], [duration2, lastDay2]) => lastDay1 - lastDay2
  );

  // store durations
  // to remove the longest duration course taken so far if we exceed time
  const maxHeap = new MaxPriorityQueue<number>();

  let currTotalTime = 0;

  for (const [duration, lastDay] of courses) {
    // if able to take this course without violating its deadline
    if (currTotalTime + duration <= lastDay) {
      currTotalTime += duration;
      maxHeap.enqueue(duration);
    } else {
      // currTotal + duration exceeds lastDay

      // const currMaxDuration = maxHeap.front();

      // if the heap is not empty
      // the course is shorter than the longest course you've taken
      if (maxHeap.size() !== 0 && maxHeap.front()! > duration) {
        const maxDuration = maxHeap.dequeue()!;
        currTotalTime += duration - maxDuration;
        maxHeap.enqueue(duration);
      }
    }
  }
  return maxHeap.size();
}
