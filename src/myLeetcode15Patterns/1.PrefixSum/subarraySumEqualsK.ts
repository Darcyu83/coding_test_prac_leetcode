function subarraySumPrefixSum(nums: number[], k: number): number {
  let matched = 0;
  const prefixSum: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    prefixSum.push(nums[i] + (prefixSum[prefixSum.length - 1] || 0));
  }

  for (let curr = 0; curr < prefixSum.length; curr++) {
    if (prefixSum[curr] === k) matched++;
    for (let prev = 0; prev < curr; prev++) {
      if (prefixSum[curr] - prefixSum[prev] === k) matched++;
    }
  }

  return matched;
}

// Approach 1 :
// currPrefixSum − prefixSum[j] = k
// currPrefixSum  = prefixSum[prev] + k
// prefixSum[prev] = currPrefixSum - k ; => need one more iteration.

// inputs
// k = -10
// nums      [10,   2,  -2,  -20,   10]
// index      0    1    2     3     4
// prefixSum [10,  12,  10,  -10,   0]

export function subarraySum(nums: number[], k: number): number {
  let currPrefixSum = 0;
  let count = 0;

  const prefixSumMap = new Map<number, number>();

  // Initialize the map with prefixSum 0 at index -1 to handle the case where a subarray starts from index 0
  // prefixSumMap.set(0, 1); // To count the case when prefixSum[0] itself equals k

  for (let i = 0; i < nums.length; i++) {
    currPrefixSum += nums[i];

    // Check if there's a previous prefix sum such that currPrefixSum - prefixSum[prev] = k
    let prevPrefixSum = currPrefixSum - k;

    if (prefixSumMap.has(prevPrefixSum)) {
      count += (prefixSumMap.get(currPrefixSum - k) || 0) + 1;
    }

    prefixSumMap.set(currPrefixSum, (prefixSumMap.get(currPrefixSum) || 0) + 1);
  }

  return count;
}

export function subarraySumWithRanges(nums: number[], k: number): number[][] {
  const result: number[][] = [];
  let prefixSum = 0;
  const prefixSumMap = new Map<number, number[]>();

  // prefixSumMap.set(prefixSum, [-1]);

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (prefixSumMap.has(prefixSum - k)) {
      for (const startIdx of prefixSumMap.get(prefixSum - k)!) {
        result.push([startIdx + 1, i]);
      }
    }

    prefixSumMap.set(prefixSum, [...(prefixSumMap.get(prefixSum) || [])]);
  }

  return result;
}
