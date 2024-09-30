// Concatenation of Array
// from https://leetcode.com/problems/concatenation-of-array/description/

function getConcatenation(nums: number[]): number[] {
    return [...nums, ...nums];
};

// runtime 99th percentile
// memory 18th percentile