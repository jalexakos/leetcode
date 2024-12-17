// Count the Digits That Divide a Number
// from https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/

function countDigits(num: number): number {
    let arrNum = String(num).split("");

    let count = 0;
    for (let i = 0; i < arrNum.length; i++) {
        let subNum = Number(arrNum[i]);
        if (num % subNum === 0) count++;
    }

    return count;
};

// runtime 100th percentile
// memory 70th percentile