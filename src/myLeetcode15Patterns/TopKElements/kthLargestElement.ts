import { MaxPriorityQueue, MinPriorityQueue } from "../../utils/priorityQueue";

class TopKElements {
  // using Sorting
  KLargestElementSortingApproach(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    return nums[nums.length - k];
  }

  // using MaxHeap
  KLargestElementMaxHeapApproach(nums: number[], k: number): number {
    const maxHeap = new MaxPriorityQueue();

    for (const num of nums) {
      maxHeap.enqueue(num);
    }

    let result: number = 0;

    for (let i = 0; i < k; i++) {
      const max = maxHeap.dequeue();
      result = max || 0;
    }
    return result;
  }

  KLargestElementMinHeapApproach(nums: number[], k: number): number {
    const minHeap = new MinPriorityQueue();

    for (let i = 0; i < k; i++) {
      minHeap.enqueue(nums[i]);
    }

    for (let i = k; i < nums.length; i++) {
      minHeap.enqueue(nums[i]);
      if (minHeap.size() > k) {
        minHeap.dequeue();
      }
    }

    let result = 0;

    for (let i = 0; i < k; i++) {
      const min = minHeap.dequeue();
      result = min || 0;
    }

    return result;
  }
}

export function findKthLargest1(nums: number[], k: number): number {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const minNum = Math.min(...nums);
  const maxNum = Math.max(...nums);

  let count = 0;

  for (let i = maxNum; i >= minNum; i--) {
    if (map.has(i)) {
      count += map.get(i);
    }

    if (count >= k) {
      return i;
    }
  }

  return -1;
}

// QuickSelect Algorithm : X  (TLE: Time Limit Exceeded)
// duplicate values
export function findKthLargest2(nums: number[], k: number): number {
  const targetIndex = nums.length - k;

  function partition(left: number, right: number): number {
    const pivot = nums[right];
    let i = left;

    for (let j = left; j < right; j++) {
      if (nums[j] <= pivot) {
        // swap elements
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
  }

  function quickSelect(left: number, right: number): number {
    const pivotIndex = partition(left, right);
    if (pivotIndex === targetIndex) {
      return nums[pivotIndex];
    } else if (pivotIndex < targetIndex) {
      return quickSelect(pivotIndex + 1, right);
    } else {
      return quickSelect(left, pivotIndex - 1);
    }
  }

  return quickSelect(0, nums.length - 1);
}

// QuickSelect Algorithm
export function findKthLargest3(nums: number[], k: number): number {
  const targetIndex = nums.length - k;

  function partition(left: number, right: number): [number, number] {
    const randomIndex = left + Math.floor(Math.random() * (right - left + 1));

    [nums[randomIndex], nums[right]] = [nums[right], nums[randomIndex]];

    const pivot = nums[right];
    let i = left,
      j = left,
      n = right;

    while (j <= n) {
      if (nums[j] < pivot) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j++;
      } else if (nums[j] > pivot) {
        [nums[j], nums[right]] = [nums[right], nums[j]];
        n--;
      } else {
        j++;
      }
    }

    return [i, n];
  }

  function quickSelect(left: number, right: number): number {
    const [low, high] = partition(left, right);
    if (targetIndex >= low && targetIndex <= high) {
      return nums[targetIndex];
    } else if (targetIndex < low) {
      return quickSelect(left, low - 1);
    } else {
      return quickSelect(high + 1, right);
    }
  }

  return quickSelect(0, nums.length - 1);
}

export function findKthLargest4WithClass(nums: number[], k: number): number {
  let heap = new MaxHeap(nums);
  let result: number = 0;
  for (let i = 0; i < k; i++) {
    result = heap.pop();
  }

  return result;
}

class MaxHeap {
  heap: number[] = [];

  constructor(nums: number[]) {
    this.heap = [];
    this.buildHeap(nums);
  }

  leftChildIndx(parent: number) {
    return parent * 2 + 1;
  }
  rightChildIndex(parent: number) {
    return parent * 2 + 2;
  }

  swap(a: number, b: number) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  findLargestIndex(parent: number) {
    const left = this.leftChildIndx(parent);
    const right = this.rightChildIndex(parent);

    let largest = parent;
    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    return largest;
  }

  filterDown() {
    let index = 0;
    while (index < this.heap.length) {
      let largest = this.findLargestIndex(index);
      if (largest !== index) {
        this.swap(index, largest);
        index = largest;
      } else {
        break;
      }
    }
  }

  pop() {
    let result = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.filterDown();

    return result;
  }

  buildHeap(arr: number[]) {
    this.heap.push(...arr);

    const n = arr.length;

    const heapify = (index: number) => {
      let largest = this.findLargestIndex(index);

      if (largest !== index) {
        this.swap(largest, index);
        heapify(largest);
      }
    };

    for (let i = Math.floor(n / 2); i >= 0; i--) {
      heapify(i);
    }
  }
}
