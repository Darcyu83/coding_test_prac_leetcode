// max-heap
export function kthLargestEl() {
  // let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  let nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5],
    k = 4;

  const heap: number[] = [];

  function heapify(i: number, before?: number) {
    // findLargestNumIndex
    const leftIdx = i * 2 + 1;
    const rightIdx = i * 2 + 2;
    let largestIdx = i;

    if (leftIdx < heap.length && heap[leftIdx] > heap[largestIdx]) {
      largestIdx = leftIdx;
    }
    if (rightIdx < heap.length && heap[rightIdx] > heap[largestIdx]) {
      largestIdx = rightIdx;
    }

    // swap
    if (largestIdx !== i) {
      [heap[largestIdx], heap[i]] = [heap[i], heap[largestIdx]];
      heapify(largestIdx, i);
    }
  }

  // buildHeap
  heap.push(...nums);

  for (let i = Math.floor(heap.length / 2); i >= 0; i--) {
    heapify(i);
  }

  console.log(heap);
  let result = 0;

  for (let i = 0; i < k; i++) {
    result = heap.pop()!;
  }

  console.log(heap, result);
}
