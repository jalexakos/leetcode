// Left and Right Sum Differences
// from https://leetcode.com/problems/left-and-right-sum-differences/description/

function leftRightDifference(nums: number[]): number[] {
    let lSum = 0;
    let rSum = nums.reduce((a,b) => a + b, 0) - nums[0];

    let answer: number[] = [Math.abs(lSum - rSum)];

    for (let i = 1; i < nums.length; i++) {
        lSum += nums[i - 1];
        rSum -= nums[i];

        answer.push(Math.abs(lSum - rSum));
    }

    return answer;
};

// runtime 75th percentile
// memory 77th percentile