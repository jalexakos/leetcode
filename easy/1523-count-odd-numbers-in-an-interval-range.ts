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

function countOddsOpt(low: number, high: number): number {
    let count = (high - low) / 2;
    if ((high - low) % 2 === 0) {
        if (high % 2 !== 0) return count + 1;
    }
    
    return Math.ceil(count);
};

// runtime 79th percentile
// memory 65th percentile