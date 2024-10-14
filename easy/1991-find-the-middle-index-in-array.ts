// Find the Middle Index in Array
// from https://leetcode.com/problems/find-the-middle-index-in-array/description/

// brute force solution
function findMiddleIndex(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        let left = nums.slice(0, i).reduce((a,b) => a + b, 0);
        let right = nums.slice(i + 1, nums.length).reduce((a,b) => a + b, 0);
        if (left === right) return i;
    }
    return -1;
};

// runtime 78th percentile
// memory 12th percentile

// optimized solution, after brute force solution
function findMiddleIndexOpt(nums: number[]): number {
    let left = 0;
    let right = nums.slice(1, nums.length).reduce((a,b) => a + b, 0);
    if (left === right) return 0;
    for (let i = 1; i < nums.length; i++) {
        left += nums[i - 1];
        right -= nums[i];
        if (left === right) return i;
    }
    return -1;
};

// runtime 84th percentile
// memory 81st percentile