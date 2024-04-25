// from https://leetcode.com/problems/find-pivot-index/description/

function pivotIndex(nums: number[]): number {
    if (nums.length === 1) return 0;
    if (nums.length === 2) {
        if (nums[1] === 0) return 0;
        else if (nums[0] === 0) return 1;
        else return -1;
    }
    
    let leftSum = 0;
    let rightSum = nums.slice(1,nums.length).reduce((a,b) => a + b, 0);
    if (leftSum - rightSum === 0) return 0;

    for (let i = 1; i < nums.length; i++) {
        leftSum += nums[i - 1];
        rightSum -= nums[i];
        if (leftSum - rightSum === 0) return i;
    }
    return -1;
};

// runtime 88th percentile
// memory 52nd percentile