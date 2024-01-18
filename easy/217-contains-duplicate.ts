// from https://leetcode.com/problems/contains-duplicate/description/

function containsDuplicate(nums: number[]): boolean {
    let hash: Record<number,number> = {};
    for (let num = 0; num < nums.length; num++){
            if (hash[nums[num]] >= 1) {
            return true;
        }
        else {
            hash[nums[num]] = 1;
        }
    }
    return false;
};

// runtime 86th percentile
// memory 53rd percentile