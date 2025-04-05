/**
 * Heap Property
 * 1. In a heap the parent is always greater than or equal to the children for max-heap
 * 2. In a heap the parent is always less than or equal to the children for min-heap
 * 3. A binary heap can be implemented using an array where:
 *  3-1. The left child of a node at index i is at index 2 * i + 1.
 *  3-2. The right child of a node at index i is at index 2 * i + 2.
 *  3-3. The parent of a node at index i is at index Math.floor((i - 1) / 2).
 * 4. The root element will be at index 0
 */

/**
 * A heap is an efficient tree-based data structure that supports operations like insertion,
 * removal, and finding the minimum or maximum element in logarithmic time.
 * It is widely used in algorithms like Dijkstra's shortest path algorithm and Heap Sort.
 * Heaps are essential in applications that require quick access to the largest or smallest elements.
 */

/**
 * MaxPriorityQueue : The Largest element is always at the top(root)
 */

export class MaxPriorityQueue<T = number> {
  private heap: T[] = [];
  private priority: (x: T) => number;

  constructor(options?: { priority: (x: T) => number }) {
    this.priority = options?.priority || ((x: T) => x as unknown as number);
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Helper function to maintain the max-heap property
  private heapifyUp(index: number) {
    let currentIndex = index;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (
        this.priority(this.heap[currentIndex]) <=
        this.priority(this.heap[parentIndex])
      )
        break;
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  // Helper function to maintain the max-heap property during removal
  private heapifyDown(index: number) {
    let currentIndex = index;
    const length = this.heap.length;
    while (currentIndex < length) {
      let leftChild = 2 * currentIndex + 1;
      let rightChild = 2 * currentIndex + 2;
      let largest = currentIndex;

      if (
        leftChild < length &&
        this.priority(this.heap[leftChild]) > this.priority(this.heap[largest])
      ) {
        largest = leftChild;
      }

      if (
        rightChild < length &&
        this.priority(this.heap[rightChild]) > this.priority(this.heap[largest])
      ) {
        largest = rightChild;
      }

      if (largest === currentIndex) break;

      this.swap(currentIndex, largest);
      currentIndex = largest;
    }
  }

  // Insert a new element into the priority queue
  enqueue(value: T) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;

    const max = this.heap[0];

    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);

    return max;
  }

  peek(): T | undefined {
    return this.heap[0];
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  size(): number {
    return this.heap.length;
  }
}
