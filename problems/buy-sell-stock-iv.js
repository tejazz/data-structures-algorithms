// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/561/week-3-october-15th-october-21st/3499/

var maxProfit = function (k, prices) {
    if (prices.length === 0) return 0;

    if (k >= Math.floor(prices.length / 2)) {
        let profit = 0;

        for (let i = 1; i < prices.length; i++) {
            if (prices[i - 1] < prices[i]) {
                profit += prices[i] - prices[i - 1];
            }
        }

        return profit;
    }

    // for one transaction
    let maxProfit = 0;
    let minimumCost = prices[0];
    let profitArray = [];
    
    for (let i = 0; i < prices.length; i++) {
        minimumCost = Math.min(minimumCost, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minimumCost);
        profitArray[i] = maxProfit;
    }

    for (let i = 1; i < k; i++) {
        kTimesProfit(prices, profitArray);
    }

    let final = 0;

    for (let i = 0; i < profitArray.length; i++) {
        final = Math.max(final, profitArray[i]);
    }

    return final;
};

function kTimesProfit(prices, profit) {
    let secondBuy = MAX_SAFE_INTEGER;
    let profit2 = 0;

    for (let i = 0; i < prices.length; i++) {
        secondBuy = Math.min(secondBuy, prices[i] - profit[i]);
        profit2 = Math.max(profit2, prices[i] - secondBuy);
        profit[i] = profit2;
    }
}