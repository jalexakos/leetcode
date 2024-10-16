// Smallest Index With Equal Value
// from https://leetcode.com/problems/smallest-index-with-equal-value/description/

function smallestEqual(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) return i;
    }
    return -1;
};

// runtime 11th percentile
// memory 100th percentile