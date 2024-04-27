// from https://leetcode.com/problems/binary-search/description/

function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    let midpoint = Math.floor(right/2);
    while (left <= right) {
        if (nums[midpoint] === target) return midpoint;
        else if (nums[midpoint] < target) {
            left = midpoint + 1;
            midpoint = Math.floor((right + left) / 2);
        } else {
            right = midpoint - 1;
            midpoint = Math.floor((right + left) / 2);
        }
    }
    
    return -1;
};

// runtime 40th percentile
// memory 13th percentile

function searchSimplified(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length - 1;
    let m = Math.floor(r/2);
    while (l <= r) {
        if (nums[m] === target) return m;
        else if (nums[m] < target) {
            l = m + 1;
            m = Math.floor((r + l) / 2);
        } else {
            r = m - 1;
            m = Math.floor((r + l) / 2);
        }
    }
    
    return -1;
};

// runtime 81st percentile
// memory 55th percentile