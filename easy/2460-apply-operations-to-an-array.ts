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

function applyOperationsOpt(nums: number[]): number[] {
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

// solution from ChatGPT
function applyOperations(nums: number[]): number[] {
    const n = nums.length;

    // Step 1: Apply the operations
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2; // Double the current element
            nums[i + 1] = 0; // Set the next element to 0
        }
    }

    // Step 2: Shift all 0's to the end
    const result: number[] = [];
    let zeroCount = 0;

    for (const num of nums) {
        if (num === 0) {
            zeroCount++;
        } else {
            result.push(num); // Append non-zero elements to the result
        }
    }

    // Append the zeros to the end
    while (zeroCount--) {
        result.push(0);
    }

    return result;
}
// runtime 14th percentile
// memory 47th percentile