// Number of Unequal Triplets in Array
// from https://leetcode.com/problems/number-of-unequal-triplets-in-array/description/

function unequalTriplets(nums: number[]): number {
    let uniqueTrips = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (
                    nums[i] !== nums[j] && 
                    nums[i] !== nums[k] &&
                    nums[k] !== nums[j]
                    ) uniqueTrips++;
            }
        }
    }

    return uniqueTrips;
};

// runtime 83rd percentile
// memory 15th percentile