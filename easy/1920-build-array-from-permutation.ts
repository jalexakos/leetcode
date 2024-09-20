// Build Array from Permutation
// https://leetcode.com/problems/build-array-from-permutation/description/

function buildArray(nums: number[]): number[] {
    let ans: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]]);
    }

    return ans;
};

// runtime 83rd percentile
// memory 32nd percentile