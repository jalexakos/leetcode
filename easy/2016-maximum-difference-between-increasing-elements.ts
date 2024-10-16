// Maximum Difference Between Increasing Elements
// from https://leetcode.com/problems/maximum-difference-between-increasing-elements/description/

function maximumDifference(nums: number[]): number {
    let maxDiff = -1;
    let least = nums[0];
    let leastIdx = 0;
    for (let i = 1; i < nums.length; i++) {
        if (least < nums[i]) {
            if ((nums[i] - least) > maxDiff) {
                maxDiff = (nums[i] - least);
            }
        } else if (nums[i] < least) {
                least = nums[i];
                leastIdx = i;
            }
    }

    return maxDiff;
};

// runtime 87th percentile
// memory 67th percentile