export function maxProfit2(prices: number[]): number {
  const length = prices.length;

  let profitSum = 0;
  let minPrice = prices[0];
  for (let i = 1; i < length; i++) {
    const profit = Math.max(0, prices[i] - minPrice);
    if (i === length - 1) {
      profitSum += profit;
      continue;
    }

    if (profit > 0 && prices[i] > prices[i + 1]) profitSum += profit;

    minPrice =
      prices[i] > prices[i + 1] ? prices[i + 1] : Math.min(minPrice, prices[i]);
  }

  return profitSum;
}
