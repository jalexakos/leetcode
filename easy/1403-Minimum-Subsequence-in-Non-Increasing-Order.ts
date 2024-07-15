// Minimum Subsequence in Non-Increasing Order
// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/description/

function minSubsequence(nums: number[]): number[] {
    let sortedArr: number[] = [...nums].sort((a,b) => a - b);
    let answer: number[] = [];
    let sum: number = 0;
    let rest: number = sortedArr.reduce((a,b) => a + b, 0);

    while (sum <= rest) {
        answer.push(sortedArr.pop() || 0);

        sum = answer.reduce((a,b) => a + b, 0);
        rest = sortedArr.reduce((a,b) => a + b, 0);
    }

    return answer.sort((a,b) => b - a);
};

// runtime 70th percentile
// memory 75th percentile

// another solution I found on LeetCode (I cannot find 
// the user who posted it as it's randomized)
// that I thought was really good

function minSubsequenceOpt(nums: number[]): number[] {
    let sum1 = nums.reduce((acc, cur) => acc + cur);
    let sum2 = 0;
    nums.sort((a, b) =>  b - a)
    let output = [];
    let i = 0;
    while (sum1 >= sum2) {
        sum1 -= nums[i];
        sum2 += nums[i];
        output.push(nums[i]);
        i++;
    }
    return output;
};