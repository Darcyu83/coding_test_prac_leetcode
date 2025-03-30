export function permute(nums: number[]): number[][] {
  const permutations: number[][] = [];
  const nameList = [
    "Ian",
    "Jessica",
    "Kevin",
    "Lily",
    "Michael",
    "Nora",
    "Oscar",
    "Penelope",
    "Quincy",
    "Rebecca",
    "Steve",
    "Tracy",
    "Ulysses",
    "Violet",
    "Walter",
    "Xena",
  ];
  async function backtrackDFS(start: number, fromNm: string = "begin") {
    const name = nameList.pop()!;
    if (start === nums.length) {
      permutations.push([...nums]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      // Swap current element with the element at 'start'
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrackDFS(start + 1, name);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }
  backtrackDFS(0);
  return permutations;
}

export function permute2(nums: number[]): number[][] {
  const permutations: number[][] = [];
  const partialPermutation: number[] = [];

  function backtrack() {
    // Base case: If partialPermutation is complete, push a copy of it
    if (partialPermutation.length === nums.length) {
      // Caution! : permutations.push(partialPermutation); // Create a copy of the current permutation
      permutations.push([...partialPermutation]); // Create a copy of the current permutation
      return;
    }

    for (const num of nums) {
      if (!partialPermutation.includes(num)) {
        partialPermutation.push(num);
        backtrack(); // Recurse
        partialPermutation.pop(); // Backtrack
      }
    }
  }

  backtrack(); // Start the backtracking process
  return permutations;
}

// space O(n)
export function permuteRecap(nums: number[]): number[][] {
  // time n! * n^2
  // space n! * n

  const result: number[][] = [];

  function backtrack(path: number[], remaining: number[]): void {
    if (remaining.length === 0) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const arg1 = [...path, remaining[i]];
      const arg2 = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
      backtrack(arg1, arg2);
    }
  }

  backtrack([], nums);

  return result;
}
