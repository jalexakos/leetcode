// Check if Number Has Equal Digit Count and Digit Value
// from https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/description/

function digitCount(num: string): boolean {
    let countMap = new Map();
    let idxMap = new Map();
    for (let i = 0; i < num.length; i++) {
        let dig = Number(num[i]);
        if (countMap.has(dig)) {
            countMap.set(dig, countMap.get(dig) + 1);
        } else {
            countMap.set(dig, 1);
        }
        idxMap.set(i, dig);
    }

    let equality = true;
    countMap.forEach((v,k) => {
        if (v !== idxMap.get(k)) equality = false;
    })

    return equality;
};

// runtime 69th percentile
// memory 69th percentile