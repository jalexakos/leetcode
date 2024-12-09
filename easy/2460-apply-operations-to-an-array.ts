// Apply Operations to an Array
// from https://leetcode.com/problems/apply-operations-to-an-array/description/

function shiftZeroes(nums: number[]): number[] {
    let indices: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) indices.push(i);
    }

    let diff = 0;
    indices.forEach(idx => {
        let tempIdx = idx - diff;
        nums.splice(tempIdx, 1);
        nums.push(0);
        diff++;
    })

    return nums;
}

function applyOperations(nums: number[]): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0;
        }
    }

    return shiftZeroes(nums);
};

// runtime 14th percentile
// memory 8th percentile