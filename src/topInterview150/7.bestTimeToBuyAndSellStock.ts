export function maxProfit(prices: number[]): number {
  let length = prices.length;

  let maxProfit = 0;
  let minPrice = prices[0];

  console.log("origin source ==== ", maxProfit, minPrice);
  for (let i = 1; i < length; i++) {
    console.log(
      "i ==== ",
      i,
      "\n",
      "prices[i]  ==== ",
      prices[i],
      "\n",
      "minPrice ==== ",
      minPrice,
      "\n"
    );
    let profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
    minPrice = Math.min(minPrice, prices[i]);

    console.log("profit ==== ", maxProfit, profit);
    console.log("minPrice ==== ", minPrice, prices[i]);
    console.log("====================================", maxProfit, minPrice);
  }

  return maxProfit;
}
