// Special Array With X Elements Greater Than or Equal X
// from https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/description/

function specialArray(nums: number[]): number {
    for (let i = 1; i <= nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] >= i) count++;
        }
        if (count === i) return count;
    }

    return -1;
};

// runtime 23rd percentile
// memory 100th percentile