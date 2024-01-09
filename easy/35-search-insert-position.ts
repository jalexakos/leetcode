// from https://leetcode.com/problems/search-insert-position/

function searchInsert(nums: number[], target: number): number {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    let currentIdx = 0;

    while (leftPointer <= rightPointer){
        currentIdx = Math.floor((rightPointer + leftPointer) / 2);

        if (nums[currentIdx] === target) return currentIdx;
        else if (nums[currentIdx] < target){
            leftPointer = currentIdx + 1;
        } else {
            rightPointer = currentIdx - 1;
        }
    }
    
    return leftPointer;
};

// runtime 52th percentile
// memory 37th percentile