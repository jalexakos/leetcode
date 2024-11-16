// Smallest Even Multiple
// from https://leetcode.com/problems/smallest-even-multiple/description/

function smallestEvenMultiple(n: number): number {
    if (n % 2 === 0) return n;
    return n * 2;
};

// runtime 100th percentile
// memory 63rd percentile