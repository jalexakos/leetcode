// Find Closest Number to Zero
// from https://leetcode.com/problems/find-closest-number-to-zero/description/

function findClosestNumber(nums: number[]): number {
    let closest = 0;
    let distance = 100001;
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(0 - nums[i]) < distance) {
            distance = Math.abs(0 - nums[i]);
            closest = nums[i];
        } else if (Math.abs(0 - nums[i]) === distance && nums[i] > closest) {
            closest = nums[i];
        }
    }

    return closest;
};

// runtime 70th percentile
// memory 96th percentile