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
  let visited: Set<number> = new Set();
  let numberOfCoins = 0;

  while (queue.length > 0) {
    let size = queue.length;
    numberOfCoins++;

    for (let i = 0; i < size; i++) {
      let remaining = queue.shift()!;
      for (let coin of coins) {
        let newAmount = remaining - coin;

        if (newAmount === 0) return numberOfCoins;

        if (newAmount > 0 && !visited.has(newAmount)) {
          visited.add(newAmount);
          queue.push(newAmount);
        }
      }
    }
  }

  return -1;
}
