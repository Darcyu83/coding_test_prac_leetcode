// bottom-up DP (Memoization)
// Time: O(m * n)
// Space: O(m * n)
// from end of string to start of string
export function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length,
    n = text2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }

  return dp[0][0];
}

// Top Down DP (Memoization)
// from start of string to end of string
export function longestCommonSubsequence2(
  text1: string,
  text2: string
): number {
  const m = text1.length,
    n = text2.length;

  const memo = Array.from({ length: m }, () => Array(n).fill(-1));

  function longest(i: number, j: number): number {
    if (i === m || j === n) return 0;

    if (memo[i][j] !== -1) return memo[i][j];
    if (text1[i] === text2[j]) {
      return (memo[i][j] = 1 + longest(i + 1, j + 1));
    }

    return (memo[i][j] = Math.max(longest(i, j + 1), longest(i + 1, j)));
  }

  return longest(0, 0);
}

// Time Limit Exceeded
export function longestCommonSubsequenceTLE(
  text1: string,
  text2: string
): number {
  let m = text1.length,
    n = text2.length;

  function longest(i: number, j: number): number {
    if (i === m || j === n) return 0;

    if (text1[i] === text2[j]) return 1 + longest(i + 1, j + 1);

    return Math.max(longest(i, j + 1), longest(i + 1, j));
  }

  return longest(0, 0);
}
