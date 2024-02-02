// from https://leetcode.com/problems/power-of-three

function isPowerOfThree(n: number): boolean {
    if (n === 1) return true;
    while (n > 3) {
        n = n / 3;
    }

    return n === 3;
};

// runtime 77th percentile
// memory 10th percentile