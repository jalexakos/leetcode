// Maximum Count of Positive Integer and Negative Integer
// from https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

function maximumCount(nums: number[]): number {
    let pos = 0;
    let neg = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) neg++;
        else if (nums[i] > 0) pos++;
    }

    return Math.max(pos,neg);
};

// runtime 100th percentile
// memory 88th percentile