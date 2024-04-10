// from https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/

function dominantIndex(nums: number[]): number {
    let biggest = 0;
    let bigIdx = 0;
    let secondBig = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > biggest) {
            secondBig = biggest;
            biggest = nums[i];
            bigIdx = i;
        } else if (nums[i] > secondBig && nums[i] < biggest) {
            secondBig = nums[i];
        }
    }

    if (biggest >= (secondBig * 2)) return bigIdx;

    return -1;
};

// runtime 39th percentile
// memory 94th percentile