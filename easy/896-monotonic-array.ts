// from https://leetcode.com/problems/monotonic-array/description/

function isMonotonic(nums: number[]): boolean {
    if (nums.length < 2) return true;


    if (nums[0] > nums[nums.length - 1]) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] < nums[i + 1]) return false;
        }
    } else if (nums[0] < nums[nums.length - 1]) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) return false;
        }
    } else {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1] || nums[i] < nums[i + 1]) return false;
        }
    }

    return true;
};

// runtime 45th percentile
// memory 77th percentile