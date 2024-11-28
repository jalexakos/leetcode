// Number of Common Factors
// from https://leetcode.com/problems/number-of-common-factors/description/

function commonFactors(a: number, b: number): number {
    let count = 0;
    if (a > b) {
        if (a % b === 0) count++;
        let div = Math.floor(b/2);
        while (div > 0) {
            if (a % div === 0 && b % div === 0) count++;
            div--;
        }
    } else {
        if (b % a === 0) count++;
        let div = Math.floor(a/2);
        while (div > 0) {
            if (b % div === 0 && a % div === 0) count++;
            div--;
        }
    }

    return count;
};

// runtime 100th percentile
// memory 65th percentile