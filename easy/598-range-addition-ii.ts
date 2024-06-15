// from https://leetcode.com/problems/range-addition-ii/description/

// my first working solution - works, but very inefficient
function maxCount(m: number, n: number, ops: number[][]): number {
    let min = m * n;
    let oneMin = min;
    let zeroMin = min;

    for (let i = 0; i < ops.length; i++) {
        zeroMin = Math.min(ops[i][0], zeroMin);
        oneMin = Math.min(ops[i][1], oneMin);

        if (zeroMin * oneMin < min) {
            min = zeroMin * oneMin;
        }
    }

    return min;
};

// runtime 5th percentile
// memory 55th percentile

// a more efficient solution, after looking at other solutions
// improved solution after looking at other folks'
function maxCountOpt(m: number, n: number, ops: number[][]): number {
    let zeroMin = m;
    let oneMin = n;

    for (let i = 0; i < ops.length; i++) {
        zeroMin = Math.min(ops[i][0], zeroMin);
        oneMin = Math.min(ops[i][1], oneMin);
    }

    return zeroMin * oneMin;
};

// runtime 55th percentile
// memory 51st percentile