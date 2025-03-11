function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();

  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  return Array.from(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((val) => Number(val[0]));
}
