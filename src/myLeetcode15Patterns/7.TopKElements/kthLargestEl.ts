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

class MinPriorityQueue<T> {
  private heap: T[] = [];

  // 객체 내의 값 비교 필요할 때
  private compareFn: (val: T) => number = (val) => 0 as number;

  constructor(options?: { compareFn: (num: T) => number }) {
    if (options?.compareFn) this.compareFn = options.compareFn;
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // 자식 인덱스로 부모 인덱스 접근 후 값 비교
  // 부모 값이 자식값보다 작으면 break; minHeap
  private heapifyUp(childIdx: number) {
    let currIdx = childIdx;
    while (currIdx > 0) {
      const parentIdx = Math.floor((currIdx - 1) / 2);
      if (
        this.compareFn(this.heap[currIdx]) >=
        this.compareFn(this.heap[parentIdx])
      ) {
        break;
      }

      this.swap(currIdx, parentIdx);
      currIdx = parentIdx;
    }
  }
  private heapifyDown(parentIdx: number) {
    let currIdx = parentIdx;
    const length = this.heap.length;
    while (currIdx < length) {
      let leftChildIdx = 2 * currIdx + 1;
      let rightChidIdx = 2 * currIdx + 2;
      let smallestIdx = currIdx; // parent

      if (
        leftChildIdx < length &&
        this.compareFn(this.heap[leftChildIdx]) <
          this.compareFn(this.heap[smallestIdx])
      ) {
        smallestIdx = leftChildIdx;
      }

      if (
        rightChidIdx < length &&
        this.compareFn(this.heap[rightChidIdx]) <
          this.compareFn(this.heap[smallestIdx])
      ) {
        smallestIdx = rightChidIdx;
      }

      if (smallestIdx === currIdx) break;
      this.swap(currIdx, smallestIdx);
      currIdx = smallestIdx;
    }
  }

  enqueue(value: T) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.heap.length === 0) return undefined;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);

    return min;
  }

  peek() {
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }
}

function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinPriorityQueue();

  return 0;
}
