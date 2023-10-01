export function maxProfit2(prices: number[]): number {
  let length = prices.length;

  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < length; i++) {
    let profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
}
