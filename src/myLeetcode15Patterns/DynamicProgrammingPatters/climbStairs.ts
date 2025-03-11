export function fibonacci(n: number) {
  let a = 0,
    b = 1,
    c = 0;

  for (let i = 0; i < n; i++) {
    a = b;
    b = c;
    c = a + b;
  }

  return b;
}

// https://www.youtube.com/watch?v=Y0lT9Fck7qI
// dp like Memoization = cached
// dp: Bottom-up
// Space Optimization
export function climbStairs(n: number): number {
  let one = 1,
    two = 1;
  for (let i = 0; i < n - 1; i++) {
    let temp = one;
    one = one + two;
    two = temp;
  }
  return one;
}

// Approach 1: Memoization (Top-Down Dynamic Programming)
// Time complexity: O(n)
// Space complexity: O(n)
// DFS
export function climbStairsMemo(n: number): number {
  if (n <= 1) return 1;

  const memo: number[] = Array(n + 1).fill(-1);

  function helper(i: number) {
    if (i <= 2) return i; // Base case: if n is 1 or 2, return n directly

    if (memo[i] !== -1) {
      return memo[i];
    }

    memo[i] = helper(i - 1) + helper(i - 2);

    return memo[i];
  }

  return helper(n);
}

// Approach 2: Tabulation (Bottom-Up Dynamic Programming)
function climbStairsTabulation(n: number): number {
  const tab: number[] = new Array(n + 1).fill(0);
  if (n >= 0) tab[0] = 1;
  if (n >= 1) tab[1] = 1;
  for (let i = 2; i <= n; i++) tab[i] = tab[i - 1] + tab[i - 2];
  return tab[n];
}

// Approach 3: Space Optimization
function climbStairsSpaceOptimized(n: number): number {
  if (n <= 1) return 1;

  let firstNum: number = 1,
    secondNum: number = 1,
    thirdNum: number = 0;

  for (let i = 2; i <= n; i++) {
    // Current step is the sum of the previous two steps
    thirdNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = thirdNum;
  }

  return thirdNum;
}
