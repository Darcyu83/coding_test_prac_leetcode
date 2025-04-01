// faster
export function coinChange(coins: number[], amount: number): number {
  const dp: number[] = new Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (const coin of coins) {
    for (let money = coin; money <= amount; money++) {
      dp[money] = Math.min(dp[money], dp[money - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// DP (bottom-up)
export function coinChangeDP(coins: number[], amount: number): number {
  const dp: number[] = new Array(amount + 1).fill(amount + 1);

  dp[0] = 0;

  for (let increMoney = 1; increMoney <= amount; increMoney++) {
    for (const coin of coins) {
      if (increMoney >= coin) {
        dp[increMoney] = Math.min(dp[increMoney], dp[increMoney - coin] + 1);
      }
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
}

// BFS
export function coinChangeBFS(coins: number[], amount: number): number {
  if (amount === 0) return 0;
  const queue: number[] = [amount];
  const visited: Set<number> = new Set();
  let numberOfCoins = 0;

  while (queue.length > 0) {
    let size = queue.length;
    numberOfCoins++;

    while (size > 0) {
      size--;
      const remaining = queue.shift()!;
      for (const coin of coins) {
        const newRemaining = remaining - coin;
        if (newRemaining === 0) return numberOfCoins;

        if (newRemaining > 0 && !visited.has(newRemaining)) {
          visited.add(newRemaining);
          queue.push(newRemaining);
        }
      }
    }
  }
  return -1;
}
