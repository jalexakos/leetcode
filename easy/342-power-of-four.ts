// from https://leetcode.com/problems/power-of-four/description/

function isPowerOfFour(n: number): boolean {
    if (n === 1) return true;
    else while (n > 4) {
        n = n / 4;
    }

    return n / 4 === 1;
};

// runtime 32nd percentile
// memory 8th percentile