// Running Sum of 1d Array
// from https://leetcode.com/problems/running-sum-of-1d-array/description/

function runningSum(nums: number[]): number[] {
    let answer: number[] = [nums[0]];
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i];
        answer.push(sum);
    }

    return answer;
};

// runtime 97th percentile
// memory 35th percentile