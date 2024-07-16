// Minimum Value to Get Positive Step by Step Sum
// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/description/

function minStartValue(nums: number[]): number {
    let startValue = 1;

    let smallestVal = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum < smallestVal){
            smallestVal = sum;
        }
    }

    return startValue - smallestVal;
};

// runtime 68th percentile
// memory 54th percentile