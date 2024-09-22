// Minimum Operations to Make the Array Increasing
// from https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/description/

function minOperations(nums: number[]): number {
    let steps = 0;
    let nextBiggest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= nums[i + 1]) {
            nextBiggest = nums[i] + 1;
            steps += (nextBiggest - nums[i + 1]);
            nums[i + 1] = nextBiggest;
        }
    }

    return steps;
};

// runtime 49th percentile
// memory 84th percentile