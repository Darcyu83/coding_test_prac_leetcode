export function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();

  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  return Array.from(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((val) => Number(val[0]));
}

interface HeapItem {
  num: number;
  freqCnt: number;
}

// heap
export function topKFrequentHeap(nums: number[], k: number): number[] {
  const freqMap = new Map<number, number>();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const maxHeap: HeapItem[] = Array.from(freqMap.entries()).map(
    ([num, freqCnt]) => ({ num, freqCnt })
  );

  function findBiggerChildIdx(parentIdx: number) {
    let largest = parentIdx;
    const left = parentIdx * 2 + 1;
    const right = parentIdx * 2 + 2;

    if (
      left < maxHeap.length &&
      maxHeap[left].freqCnt > maxHeap[largest].freqCnt
    ) {
      largest = left;
    }

    if (
      right < maxHeap.length &&
      maxHeap[right].freqCnt > maxHeap[largest].freqCnt
    ) {
      largest = right;
    }

    return largest;
  }

  function heapify(parentIdx: number) {
    const largestChildIdx = findBiggerChildIdx(parentIdx);

    if (largestChildIdx !== parentIdx) {
      [maxHeap[parentIdx], maxHeap[largestChildIdx]] = [
        maxHeap[largestChildIdx],
        maxHeap[parentIdx],
      ];

      heapify(largestChildIdx);
    }
  }

  function pop() {
    const largest = maxHeap[0];

    if (maxHeap.length > 1) {
      maxHeap[0] = maxHeap.pop()!;

      let index = 0;
      while (index < maxHeap.length) {
        const largestChildIdx = findBiggerChildIdx(index);
        if (index !== largestChildIdx) {
          [maxHeap[index], maxHeap[largestChildIdx]] = [
            maxHeap[largestChildIdx],
            maxHeap[index],
          ];

          index = largestChildIdx;
        } else {
          break;
        }
      }
    }

    return largest.num;
  }

  // build heap
  for (let i = Math.floor(maxHeap.length / 2) - 1; i >= 0; i--) {
    heapify(i);
  }

  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(pop());
  }

  return result;
}
