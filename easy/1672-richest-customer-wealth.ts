// Richest Customer Wealth
// from https://leetcode.com/problems/richest-customer-wealth/description/

function maximumWealth(accounts: number[][]): number {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        let total = accounts[i].reduce((a,b) => a + b, 0);

        if (total > max) max = total;
    }

    return max;
};

// runtime 90th percentile 
// memory 99th percentile