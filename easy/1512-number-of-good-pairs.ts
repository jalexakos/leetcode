// Number of Good Pairs
// from https://leetcode.com/problems/number-of-good-pairs/description/

function numIdenticalPairs(nums: number[]): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        for (let k = i + 1; k < nums.length; k++) {
            if (nums[i] === nums[k]) count++;
        }
    }

    return count;
};

// runtime 58th percentile
// memory 50th percentile