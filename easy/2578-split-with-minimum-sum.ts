// Split With Minimum Sum
// from https://leetcode.com/problems/split-with-minimum-sum/description/

function splitNum(num: number): number {
    let arrNum = String(num).split("").sort((a,b) => Number(a) - Number(b));
    let total = 0;
    let left: string = "";
    let right: string = "";

    for (let i = 0; i < arrNum.length; i++) {
        if (i % 2 === 0) left += arrNum[i];
        else right += arrNum[i];
    }

    return Number(left) + Number(right);
};

// runtime 100th percentile
// memory 57th percentile