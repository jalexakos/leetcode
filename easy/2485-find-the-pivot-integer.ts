// Find the Pivot Integer
// from https://leetcode.com/problems/find-the-pivot-integer/description/

function pivotInteger(n: number): number {
    let sum = 0;
    let start = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    for (let i = 1; i <= n; i++) {
        start += i;
        if (start === sum) return i;
        sum -= i;
    }

    return -1;
};

// runtime 51st percentile
// memory 71st percentile