// from https://leetcode.com/problems/third-maximum-number/description/

function thirdMax(nums: number[]): number {
    nums.sort(((a, b) => b - a));
    let set = new Set(nums);
    if (set.size < 3) return [...set][0];

    return [...set][2];
};

// runtime 82nd percentile
// memory 23rd percentile