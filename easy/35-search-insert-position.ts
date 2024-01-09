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

function searchInsertMemOp(nums: number[], target: number): number {
    if (nums.length === 1){
        if (nums[0] < target) return 1;
        return 0;
    }

    let l = 0;
    let r = nums.length - 1;
    let i = 0;

    while (l <= r){
        i = Math.floor((r + l) / 2);

        if (nums[i] === target) return i;
        else if (nums[i] < target){
            l = i + 1;
        } else {
            r = i - 1;
        }
    }
    
    return l;
};

// runtime 97.45th percentile
// memory 90.56th percentile