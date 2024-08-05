// Count Odd Numbers in an Interval Range
// from https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/description/

function countOdds(low: number, high: number): number {
    let count = 0;

    for (let i = low; i <= high; i++) {
        if (i % 2 === 1) count++;
    }

    return count;
};

// runtime 34th percentile
// memory 64th percentile