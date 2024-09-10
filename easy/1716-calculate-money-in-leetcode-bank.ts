// Calculate Money in Leetcode Bank
// from https://leetcode.com/problems/calculate-money-in-leetcode-bank/description/

function totalMoney(n: number): number {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 7 === 0) {
            total += 7 + ((i - 7) / 7);
        } else {
            total += Math.floor(i / 7) + (i % 7);
        }
    }

    return total;
};

// runtime 100th percentile
// memory 21st percentile