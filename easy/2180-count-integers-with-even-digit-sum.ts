// Count Integers With Even Digit Sum
// from https://leetcode.com/problems/count-integers-with-even-digit-sum/description/

function countEven(num: number): number {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (i < 10) {
            if (i % 2 === 0) count++;
        } else {
            let strNum = String(i);
            let arrNum = strNum.split('');
            let sum = 0;
            for (let x = 0; x < arrNum.length; x++) {
                sum += Number(arrNum[x]);
            }

            if (sum % 2 === 0) count++;
        }
    }

    return count;
};

// runtime 50th percentile
// memory 61st percentile