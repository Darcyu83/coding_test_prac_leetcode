// Approach 1: Memoization (Top-Down Dynamic Programming)
// Time complexity: O(n)
// Space complexity: O(n)
function climbStairsMemo(n: number): number {
  if (n <= 1) return 1;

  const memo: number[] = Array(n + 1).fill(-1);

  function helper(i: number) {
    if (i <= 2) return 1; // Base case: if n is 1 or 2, return n directly

    if (memo[i] !== -1) {
      return memo[i];
    }

    memo[i] = helper(i - 1) + helper(i - 2);

    return memo[i];
  }

  return helper(n);
}

// Approach 1 return paths : Memoization (Top-Down Dynamic Programming)
export function climbStairsMemoPaths(n: number): number[][] {
  const memo: { [key: number]: number[][] } = {};

  function getPaths(stepsLeft: number, step?: number): number[][] {
    console.log("stepsLeft ==== ", step, n, stepsLeft, memo);
    if (stepsLeft === 0) return [[]];

    if (stepsLeft < 0) return [];
    // If we've already computed this subproblem, return the result from mem
    if (memo[stepsLeft]) return memo[stepsLeft];

    const paths: number[][] = [];

    // Try to take a 1-step
    const oneStepPaths = getPaths(stepsLeft - 1, 1);

    oneStepPaths.forEach((path) => {
      // console.log("path ==== ", [1, ...path]);
      paths.push([1, ...path]);
    });

    // Try to take a 2-step
    const twoStepPaths = getPaths(stepsLeft - 2, 2);
    twoStepPaths.forEach((path) => {
      // console.log("path ==== ", [2, ...path]);
      paths.push([2, ...path]);
    });

    // console.log("paths ==== ", paths);
    memo[stepsLeft] = paths;

    return paths;
  }

  return getPaths(n);
}

// Approach 2: Tabulation (Bottom-Up Dynamic Programming)
function climbStairsTabulation(n: number): number {
  if (n <= 2) return n;

  const dp: number[] = new Array(n + 1);
  dp[0] = 1; // Base case: 1 way to stay at the ground
  dp[1] = 1; // Base case: 1 way to reach the first step

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

export function climbStairsTabPaths(n: number): number[][] {
  const dp: number[][][] = Array.from({ length: n + 1 }, () => []);

  dp[0] = [[]];

  for (let i = 1; i <= n; i++) {
    if (i - 1 >= 0) {
      dp[i].push(...dp[i - 1].map((path) => [1, ...path]));
    }

    if (i - 2 >= 0) {
      dp[i].push(...dp[i - 2].map((path) => [2, ...path]));
    }
  }

  return dp[n];
}

// Approach 3: Space Optimization
function climbStairsSpaceOptimized(n: number): number {
  if (n <= 2) return n;

  let prev2 = 1,
    prev1 = 1; // Base values for step 0 and step 1
  for (let i = 2; i <= n; i++) {
    // Current step is the sum of the previous two steps
    let current = prev1 + prev2;

    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

export function climbStairsSpaceOptimizedPaths(n: number): number[][] {
  if (n === 0) return [[]];

  let prev1: number[][] = [[]];
  let prev2: number[][] = [[]];

  for (let i = 1; i <= n; i++) {
    const current: number[][] = [];
    if (i - 1 >= 0) {
      prev2.forEach((path) => current.push([1, ...path]));
    }

    if (i - 2 >= 0) {
      prev1.forEach((path) => current.push([2, ...path]));
    }

    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
}
