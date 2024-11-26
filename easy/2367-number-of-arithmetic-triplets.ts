// Number of Arithmetic Triplets
// from https://leetcode.com/problems/number-of-arithmetic-triplets/description/

function findDiff(arr: number[], orig: number, diff: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - orig === diff) return i;
    }

    return -1;
}

function arithmeticTriplets(nums: number[], diff: number): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let next = findDiff(nums.slice(i + 1, nums.length), nums[i], diff);
        if (next > -1) {
            next += (i + 1);
            if (findDiff(nums.slice(next + 1, nums.length), nums[next], diff) > -1) count++;
        }
    }

    return count;
};

// runtime 31st percentile
// memory 6th percentile

// from ChatGPT
function arithmeticTripletsOpt(nums: number[], diff: number): number {
    const numSet = new Set(nums); // Use a set for fast lookup
    let count = 0;

    for (const num of nums) {
        // Check if num + diff and num + 2 * diff exist in the set
        if (numSet.has(num + diff) && numSet.has(num + 2 * diff)) {
            count++;
        }
    }

    return count;
}

// runtime 65th percentile
// memory 31st percentile