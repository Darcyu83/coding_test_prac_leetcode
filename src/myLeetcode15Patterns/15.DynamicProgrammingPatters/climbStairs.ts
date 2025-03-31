// Fibonacci recursive
export function fiboRecursive(n: number): number {
  return n >= 2 ? fiboRecursive(n - 1) + fiboRecursive(n - 2) : n;
}

// Fibonacci Iteration
export function fibonacci(n: number) {
  if (n <= 2) return 1;
  let [prev, now] = [1, 1];

  for (let i = 3; i <= n; i++) {
    [prev, now] = [now, prev + now];
  }

  return now;
}

// Fibonacci Dynamic Programming
// Memoize
function fibonacciMemo(n: number) {
  if (n <= 1) return 1;

  const cached: number[] = Array(n + 1).fill(0);
  cached[1] = 1;
  for (let i = 2; i <= n; i++) {
    cached[i] = cached[i - 1] + cached[i - 2];
  }

  return cached[n];
}

export function fibonacciRaw(n: number) {
  if (n <= 2) return 1;
  let prev = 1,
    now = 1;

  for (let i = 3; i <= n; i++) {
    const temp = prev + now;
    prev = now;
    now = temp;
  }

  return now;
}

// https://www.youtube.com/watch?v=Y0lT9Fck7qI
// dp like Memoization = cached

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
    // i - 1 => 1 step
    // i - 2 => 2 step
    memo[i] = helper(i - 1) + helper(i - 2);

    return memo[i];
  }

  return helper(n);
}

// Iterative === Tabulation
export function climbStairsIterative(n: number): number {
  if (n <= 1) return 1;

  // below useless
  const memo: number[] = Array(n + 1).fill(0);
  memo[1] = 1;
  memo[2] = 2;
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
}

// Approach 2: Tabulation (Bottom-Up Dynamic Programming)
// 아래부터 위가 뒤집힌 형태
function climbStairsTabulation(n: number): number {
  const tab: number[] = new Array(n + 1).fill(0);
  if (n >= 0) tab[0] = 1;
  if (n >= 1) tab[1] = 1;
  for (let i = 2; i <= n; i++) {
    tab[i] = tab[i - 1] + tab[i - 2];
  }
  return tab[n];
}

// Approach 3: Space Optimization
// dp: Bottom-up
// Space Optimization
export function climbStairs(n: number): number {
  let first = 1, // Base case: 1 way to reach the first step
    second = 1; // Base case: 2 ways to reach the second step
  for (let i = 0; i < n - 1; i++) {
    let next = first + second; // The number of ways to reach the current step
    first = second; // Move the previous step value to "first"
    second = next; // Update "second" to the current step's value
  }
  return second;
}
