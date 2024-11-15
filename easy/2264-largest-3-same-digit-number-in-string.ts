// Largest 3-Same-Digit Number in String
// from https://leetcode.com/problems/largest-3-same-digit-number-in-string/description/

function largestGoodInteger(num: string): string {
    let largest = -1;
    let largestStr = "";
    for (let i = 1; i < num.length - 1; i++) {
        let numStr = num.slice(i - 1, i + 2);
        if (num[i - 1] === num[i] && num[i + 1] === num[i] && Number(numStr) > largest){
            largest = Number(numStr);
            largestStr = numStr;
        }
    }

    return largestStr;
};

// runtime 57th percentile
// memory 88th percentile