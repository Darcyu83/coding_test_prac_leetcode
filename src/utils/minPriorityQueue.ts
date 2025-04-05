/**
 * MinPriorityQueue : The smallest element is always at the top(root)
 */
// Helper function to maintain the min-heap property

export class MinPriorityQueue<T> {
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

export class MinPriorityQueue2<T = number> {
  private heap: T[] = [];
  private priority: (x: T) => number;

  constructor(options?: { priority: (x: T) => number }) {
    this.priority = options?.priority || ((x: T) => x as unknown as number);
  }

  // Helper function to swap two elements in the heap
  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Helper function to maintain the min-heap property
  private heapifyUp(index: number): void {
    let currentIndex = index;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (
        this.priority(this.heap[currentIndex]) >=
        this.priority(this.heap[parentIndex])
      )
        break;

      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  // Helper function to maintain the min-heap property during removal
  private heapifyDown(index: number): void {
    let currentIndex = index;
    const length = this.heap.length;
    while (currentIndex < length) {
      let leftChild = 2 * currentIndex + 1;
      let rightChild = 2 * currentIndex + 2;
      let smallest = currentIndex;

      if (
        leftChild < length &&
        this.priority(this.heap[leftChild]) < this.priority(this.heap[smallest])
      ) {
        smallest = leftChild;
      }

      if (
        rightChild < length &&
        this.priority(this.heap[rightChild]) <
          this.priority(this.heap[smallest])
      ) {
        smallest = rightChild;
      }

      if (smallest === currentIndex) break;

      this.swap(currentIndex, smallest);
      currentIndex = smallest;
    }
  }

  // Insert a new element into the priority queue
  enqueue(value: T): void {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // Remove and return the min element from the priority queue
  dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);

    return min;
  }

  // Peek at the min element without removing it
  peek(): T | undefined {
    return this.heap[0];
  }

  // Check if the heap is empty
  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  size(): number {
    return this.heap.length;
  }
}
