// from https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function maxProfit(prices: number[]): number {
    let left = 0;
    let right = 1;
    let gap = 0;
    while (right < prices.length) {
        if (prices[left] > prices[right]) {
            left = right;
        }
        else if ((prices[right] - prices[left]) > gap) {
            gap = prices[right] - prices[left];
        }

        right++;
    }

    return gap;
};

// runtime 85th percentile
// memory 96th percentile