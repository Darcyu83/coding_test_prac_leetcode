export function permute(nums: number[]): number[][] {
  const permutations: number[][] = [];

  const chunks: number[] = [];

  function backtrackDFS(fixedCharIdx: number) {
    if (fixedCharIdx === nums.length) {
      permutations.push([...nums]);
      return;
    }

    for (let i = fixedCharIdx; i < nums.length; i++) {
      // Swap current element with the element at 'start'
      [nums[fixedCharIdx], nums[i]] = [nums[i], nums[fixedCharIdx]];

      console.log("nums ==== ", fixedCharIdx, "i ==== ", i, nums);
      backtrackDFS(fixedCharIdx + 1);

      // Backtrack by swapping the elements back
      [nums[fixedCharIdx], nums[i]] = [nums[i], nums[fixedCharIdx]];
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
    console.log("when call ---  ----- ", [...partialPermutation]);
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
