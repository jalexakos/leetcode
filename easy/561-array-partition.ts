// from https://leetcode.com/problems/array-partition/description/

function arrayPairSum(nums: number[]): number {
    nums.sort((a,b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums.length; i+=2) {
        sum += nums[i];
    }

    return sum;
};

// runtime 38th percentile
// memory 36th percentile