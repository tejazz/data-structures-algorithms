// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/

var maxProfit = function(prices) {
    let firstBuy = MAX_SAFE_INTEGER;
    let secondBuy = MAX_SAFE_INTEGER;
    let profit1 = 0, profit2 = 0;

    for (let i = 0; i < prices.length; i++) {
        firstBuy = Math.min(firstBuy, prices[i]);
        profit1 = Math.max(profit1, prices[i] - firstBuy);
        secondBuy = Math.min(secondBuy, prices[i] - profit1);
        profit2 = Math.max(profit2, prices[i] - secondBuy);
    }

    return profit2;
};
