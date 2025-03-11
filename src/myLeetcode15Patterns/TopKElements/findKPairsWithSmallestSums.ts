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
