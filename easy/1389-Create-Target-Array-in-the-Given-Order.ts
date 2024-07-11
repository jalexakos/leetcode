// Create Target Array in the Given Order
// https://leetcode.com/problems/create-target-array-in-the-given-order/description/

function createTargetArray(nums: number[], index: number[]): number[] {
    let target: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i]);
    }

    return target;
};

// runtime 42nd percentile
// memory 33rd percentile