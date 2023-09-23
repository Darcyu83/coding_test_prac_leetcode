function twoSum(nums: number[], target: number): number[] {
  let indices: number[] = [];

  nums.map((numPrev, idx1) => {
    const nextIdx = idx1 + 1;
    const nextNum = nums[nextIdx];
    if (nextNum === undefined || nextNum === null) return;
    if (numPrev + nextNum === target) return (indices = [idx1, nextIdx]);

    nums.slice(nextIdx).map((numNext, idx2) => {
      if (indices.length !== 0) return;

      if (numPrev + numNext === target) {
        return (indices = [idx1, idx2]);
      }
    });
  });

  return indices;
}
