// Largest Positive Integer That Exists With Its Negative
// from https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/

function findMaxK(nums: number[]): number {
    let numSet: Set<number> = new Set(nums);
    let answer = -1;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (numSet.has(num * -1)) {
            if (Math.abs(num) > answer) answer = Math.abs(num);
        }
    }

    return answer;
};

// runtime 93rd percentile
// memory 30th percentile