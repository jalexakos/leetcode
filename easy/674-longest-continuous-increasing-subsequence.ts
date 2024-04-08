// from https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/

function findLengthOfLCIS(nums: number[]): number {
    if (nums.length === 1) return 1;

    let count = 0;
    let longest = 0;
    let last = nums[0] - 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > last) {
            count++;
        } else {
            if (count > longest) longest = count;
            count = 1;
        }

        last = nums[i];
    }

    if (count > longest) longest = count;

    return longest;
};

// runtime 100th percentile
// memory 76th percentile