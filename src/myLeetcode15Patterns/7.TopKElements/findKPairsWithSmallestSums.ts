interface INode {
  sum: number;
  num1: number;
  num2: number;
  index2: number;
}

class MinHeap {
  private nodes: INode[] = [];

  constructor() {
    this.nodes = [];
  }

  private swap(a: number, b: number) {
    [this.nodes[a], this.nodes[b]] = [this.nodes[b], this.nodes[a]];
  }

  private shouldSwap(parentIdx: number, childIdx: number) {
    if (parentIdx < 0 || parentIdx >= this.size()) {
      return false;
    }
    if (childIdx < 0 || childIdx >= this.size()) {
      return false;
    }

    return this.nodes[parentIdx].sum > this.nodes[childIdx].sum;
  }

  private heapifyUp(startIdx: number) {
    let childIndex = startIdx;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (this.shouldSwap(parentIndex, childIndex)) {
      this.swap(parentIndex, childIndex);
      childIndex = parentIndex;

      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }

  private heapifyDown(startIdx: number) {
    const length = this.size();
    const leftChildIndex = 2 * startIdx + 1;
    const rightChildIndex = 2 * startIdx + 2;

    let samllest = startIdx;

    if (
      leftChildIndex < length &&
      this.nodes[leftChildIndex].sum < this.nodes[samllest].sum
    ) {
      samllest = leftChildIndex;
    }

    if (
      rightChildIndex < length &&
      this.nodes[rightChildIndex].sum < this.nodes[samllest].sum
    ) {
      samllest = rightChildIndex;
    }

    if (samllest !== startIdx) {
      this.swap(startIdx, samllest);
      this.heapifyDown(samllest);
    }
  }

  size() {
    return this.nodes.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  insert(value: INode) {
    this.nodes.push(value);
    this.heapifyUp(this.size() - 1);
  }

  pop() {
    if (this.size() === 1) {
      return this.nodes.pop()!;
    }

    const minValue = this.nodes[0];
    this.nodes[0] = this.nodes.pop()!;

    this.heapifyDown(0);

    return minValue;
  }
}

function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  const result: number[][] = Array.from({ length: k }, () => []);

  const length = result.length;

  const minHeap = new MinHeap();

  for (let i = 0; i < Math.min(nums1.length, k); ++i) {
    minHeap.insert({
      sum: nums1[i] + nums2[0],
      num1: nums1[i],
      num2: nums2[0],
      index2: 0,
    });
  }

  while (k > 0 && !minHeap.isEmpty()) {
    const { num1, num2, index2 } = minHeap.pop();
    result[length - k] = [num1, num2];

    const nextIndex2 = index2 + 1;

    if (nextIndex2 < nums2.length) {
      minHeap.insert({
        sum: num1 + nums2[nextIndex2],
        num1,
        num2: nums2[nextIndex2],
        index2: nextIndex2,
      });
    }

    --k;
  }

  return result;
}

// (a,b) => a[0] - b[0]
type CompareFn<T> = (a: T, b: T) => number;

class BinaryMinHeap<T> {
  heap: T[];

  compare: CompareFn<T>;

  constructor(compareFn: CompareFn<T>) {
    this.heap = [];
    this.compare = compareFn;
  }

  dequeue(): T | undefined {
    if (this.heap.length < 2) {
      return this.heap.pop();
    }

    const samllest = this.heap[0];

    this.heap[0] = this.heap.pop()!;

    this.sinkDown(this.heap, this.compare, 0);

    return samllest;
  }

  enqueue(value: T): number {
    const length = this.heap.push(value);
    this.bubbleUp(this.heap, this.compare, length - 1);
    return length;
  }

  bubbleUp<T>(arr: Array<T>, compareFn: CompareFn<T>, index: number) {
    const value = arr[index];

    while (index > 0) {
      // Math.floor((index - 1) / 2);
      const parentIndex = (index - 1) >> 1;
      if (compareFn(arr[parentIndex], value) <= 0) {
        break;
      }

      arr[index] = arr[parentIndex];
      index = parentIndex;
    }

    arr[index] = value;
  }

  // sinkDown<T>(arr: Array<T>, compareFn: CompareFn<T>, parentIdx: number) {
  //   const N = arr.length;

  //   // Find the indices of the two children (left and right) of the parent
  //   const leftChildIdx = 2 * parentIdx + 1;
  //   const rightChildIdx = 2 * parentIdx + 2;

  //   // Find the index of the smallest (or largest in case of a max-heap) child
  //   let smallestChildIdx = parentIdx;

  //   // Check if the left child exists and is smaller than the current element
  //   if (
  //     leftChildIdx < N &&
  //     compareFn(arr[leftChildIdx], arr[smallestChildIdx]) < 0
  //   ) {
  //     smallestChildIdx = leftChildIdx;
  //   }

  //   // Check if the right child exists and is smaller than the current element
  //   if (
  //     rightChildIdx < N &&
  //     compareFn(arr[rightChildIdx], arr[smallestChildIdx]) < 0
  //   ) {
  //     smallestChildIdx = rightChildIdx;
  //   }

  //   // If the smallest child is different from the parent, swap and recursively heapify
  //   if (smallestChildIdx !== parentIdx) {
  //     [arr[parentIdx], arr[smallestChildIdx]] = [
  //       arr[smallestChildIdx],
  //       arr[parentIdx],
  //     ];

  //     // Recursively heapify the affected subtree
  //     this.sinkDown(arr, compareFn, smallestChildIdx);
  //   }
  // }

  sinkDown<T>(arr: Array<T>, compareFn: CompareFn<T>, index: number) {
    const value = arr[index];
    const N = arr.length;
    const mid = Math.floor(arr.length / 2) - 1;
    // const mid = (N - 1) / 2;

    while (index <= mid) {
      let childIndex = (index << 1) + 1;

      // +(true) = 1 , +(false) = 0
      childIndex += +(
        childIndex + 1 < N &&
        compareFn(arr[childIndex + 1], arr[childIndex]) <= 0
      );

      if (compareFn(value, arr[childIndex]) <= 0) {
        break;
      }

      arr[index] = arr[childIndex];
      index = childIndex;
    }
    arr[index] = value;
  }
}

type HeapItem = [sum: number, nums1Value: number, nums2Index: number];
export function kSmallestPairsRecap(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  const result: number[][] = [];
  if (nums1.length === 0 || nums2.length === 0 || k === 0) return result;

  const minHeap = new BinaryMinHeap<HeapItem>((a, b) => a[0] - b[0]);

  const N = Math.min(nums1.length, k);
  const M = Math.min(nums2.length, k);

  for (let i = 0; i < N; i++) {
    minHeap.enqueue([nums1[i] + nums2[0], nums1[i], 0]);
  }

  while (k-- > 0 && minHeap.heap.length > 0) {
    const [sum, nums1Value, nums2Index] = minHeap.dequeue()!;

    result.push([nums1Value, sum - nums1Value]);

    if (nums2Index + 1 < M) {
      minHeap.enqueue([
        nums1Value + nums2[nums2Index + 1],
        nums1Value,
        nums2Index + 1,
      ]);
    }
  }

  return result;
}

export function findKPairsWithSmallestSum() {
  let nums1 = [1, 7, 11],
    nums2 = [2, 4, 6],
    k = 3;

  const minHeap: { sum: number; num1: number; num2Idx: number }[] = [];
  for (let i = 0; i < k; i++) {
    minHeap.push({ sum: nums1[i] + nums2[0], num1: nums1[i], num2Idx: 0 });
  }

  for (let i = Math.floor(minHeap.length / 2); i >= 0; i--) {
    let currIdx = i;

    while (currIdx < minHeap.length) {
      let smallest = currIdx;
      let leftIdx = currIdx * 2 + 1;
      let rightIdx = currIdx * 2 + 2;

      if (
        leftIdx < minHeap.length &&
        minHeap[leftIdx].sum < minHeap[currIdx].sum
      ) {
        smallest = leftIdx;
      }

      if (
        rightIdx < minHeap.length &&
        minHeap[rightIdx].sum < minHeap[currIdx].sum
      ) {
        smallest = rightIdx;
      }

      if (smallest === currIdx) break;

      [minHeap[smallest], minHeap[currIdx]] = [
        minHeap[currIdx],
        minHeap[smallest],
      ];

      currIdx = smallest;
    }
  }

  const result = [];
  while (k-- > 0 && minHeap.length > 0) {
    const { sum, num1, num2Idx } = minHeap[0];

    minHeap[0] = minHeap.pop()!;
    let currIdx = 0;
    while (currIdx < minHeap.length) {
      let smallest = currIdx;
      let leftIdx = currIdx * 2 + 1;
      let rightIdx = currIdx * 2 + 2;

      if (leftIdx < minHeap.length && minHeap[leftIdx] < minHeap[smallest]) {
        smallest = leftIdx;
      }

      if (rightIdx < minHeap.length && minHeap[rightIdx] < minHeap[smallest]) {
        smallest = rightIdx;
      }

      if (smallest === currIdx) break;

      [minHeap[smallest], minHeap[currIdx]] = [
        minHeap[currIdx],
        minHeap[smallest],
      ];

      currIdx = smallest;
    }

    result.push([num1, sum - num1]);

    if (num2Idx + 1 < nums2.length) {
      minHeap.push({
        sum: num1 + nums2[num2Idx + 1],
        num1: num1,
        num2Idx: num2Idx + 1,
      });

      let currIdx = minHeap.length - 1;
      while (currIdx > 0) {
        let parentIdx = Math.floor((currIdx - 1) / 2);
        if (minHeap[parentIdx].sum < minHeap[currIdx].sum) break;

        [minHeap[parentIdx], minHeap[currIdx]] = [
          minHeap[currIdx],
          minHeap[parentIdx],
        ];

        currIdx = parentIdx;
      }
    }
  }
  return result;
}
