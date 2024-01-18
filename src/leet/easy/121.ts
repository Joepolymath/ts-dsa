function maxProfit(prices: number[]): number {
  let minHash = {
    val: prices[0],
    index: 0,
  };
  let maxHash = {
    val: prices[0],
    index: 0,
    outdated: false,
  };
  let profit = 0;

  for (let i in prices) {
    if (prices[i] < minHash.val) {
      minHash.val = prices[i];
      minHash.index = Number(i);
      maxHash.val = prices[i];
      maxHash.outdated = true;
      continue;
    }

    if (prices[i] > maxHash.val || maxHash.outdated) {
      maxHash.val = prices[i];
      maxHash.index = Number(i);
      maxHash.outdated = false;
    }

    if (maxHash.val - minHash.val > profit && !maxHash.outdated) {
      profit = maxHash.val - minHash.val;
    }
  }
  if (maxHash.val <= minHash.val && profit <= 0) {
    return 0;
  }
  return profit;
}

// a better implementation using 2 pointers technique
function maxProfit2(prices: number[]): number {
  let max = 0;
  let l = 0;
  let r = 1;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l];
      if (profit > max) {
        max = profit;
      }
    } else {
      l = r;
    }
    r++;
  }
  return max;
}
