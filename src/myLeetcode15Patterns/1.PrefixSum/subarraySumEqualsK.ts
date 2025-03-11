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

function subarraySum(nums: number[], k: number): number {
  let matched = 0;
  let prefixSum = 0;

  // (sum , count)
  let prefixSumMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (prefixSumMap.has(prefixSum - k)) {
      matched += (prefixSumMap.get(prefixSum - k) || 0) + 1;
    }
    prefixSumMap.set(prefixSum, (prefixSumMap.get(prefixSum) || 0) + 1);
  }

  return matched;
}
