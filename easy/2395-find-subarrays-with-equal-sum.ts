// Find Subarrays With Equal Sum
// from https://leetcode.com/problems/find-subarrays-with-equal-sum/description/

function findSubarrays(nums: number[]): boolean {
    let sums: Map<number,number[]> = new Map();
    let sum = nums.slice(0, 2).reduce((a,b) => a + b, 0);
    sums.set(sum, [0]);

    for (let i = 1; i < nums.length - 1; i++) {
        sum = (sum + nums[i + 1]) - nums[i - 1];
        if (sums.has(sum) && sums.get(sum)![0] !== i) {
            return true;
        } else {
            sums.set(sum, [i]);
        }
    }

    return false;
};

// runtime 30th percentile
// memory 23rd percentile