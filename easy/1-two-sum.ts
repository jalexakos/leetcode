// from https://leetcode.com/problems/two-sum

function twoSum(nums: number[], target: number): number[] {
    for (let val = 0; val < nums.length; val++){
        let complement = target - nums[val];

        let otherVal = nums.findIndex(num => num === complement);

        if (otherVal > -1 && otherVal !== val) return [val, otherVal];
    }

    return [-1, -1]
};

// runtime 5th percentile
// memory 63rd percentile