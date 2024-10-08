// Remove One Element to Make the Array Strictly Increasing
// from https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/description/

function nonIncreasingIdx(nums: number[]): number {
    let idx: number = -1;
    console.log(nums);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            // check if we're at the final point
            if (i === nums.length - 1) {
                if (nums[i] > nums[i - 2]) idx = i - 1;
                else idx = i;
            }
            // check if we're at the second point
            else if (i === 1) {
                if (nums[0] > nums[i + 1]) idx = 0;
                else idx = i;
            }
            else {
                if (nums[i] > nums[i - 2]) idx = i - 1;
                else idx = i;
            }
        }
    }

    return idx;
}

// doesn't account for this case: [100,21,100]
function canBeIncreasingFailed(nums: number[]): boolean {
    if (nums.length === 2) return true;
    let idx = nonIncreasingIdx(nums);
    if (idx === -1) return true;
    nums.splice(idx, 1);
    idx = nonIncreasingIdx(nums);
    
    return idx === -1;
};

function isIncreasing(nums: number[]): boolean {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) return false;
    }

    return true;
}
// works for all cases; not very efficient
function canBeIncreasing(nums: number[]): boolean {
    if (nums.length === 2) return true;
    if (isIncreasing(nums)) return true;

    for (let i = 0; i < nums.length; i++) {
        let testNum = [...nums];
        testNum.splice(i, 1);
        if (isIncreasing(testNum)) return true;
    }

    return false;
};

// runtime 20th percentile
// memory 20th percentile