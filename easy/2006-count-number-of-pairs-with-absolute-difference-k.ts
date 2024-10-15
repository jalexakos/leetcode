// Count Number of Pairs With Absolute Difference K
// from https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/description/

function countKDifference(nums: number[], k: number): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) count++;
        }
    }

    return count;
};

// runtime 46th percentile
// memory 40th percentile