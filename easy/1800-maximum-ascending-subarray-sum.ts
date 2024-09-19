// Maximum Ascending Subarray Sum
// from https://leetcode.com/problems/maximum-ascending-subarray-sum/

function isAscending(arr: number[]): boolean {
    if (arr.length === 1) return true;

    let last = arr[0];
    let i = 1;
    while (i < arr.length) {
        if (arr[i] <= last) return false;

        last = arr[i];
        i++;
    }

    return true;
}

function maxAscendingSum(nums: number[]): number {
    let largeSum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            let subArr = nums.slice(i,j);
            if (!isAscending(subArr)) break;

            if (subArr.reduce((a,b) => a + b, 0) > largeSum) {
                largeSum = subArr.reduce((a,b) => a + b, 0);
            }
        }
    }

    return largeSum;
};

// runtime 60th percentile
// memory 5th percentile

// I thought I could improve upon my original performance, so I tried a different approach. This one was much more optimal.

function maxAscendingSumOpt(nums: number[]): number {
    let largeSum = nums[0];
    let l = 0;
    let r = 1;
    let sum = nums[l];
    while (r < nums.length) {
        
        if (nums[r] > nums[r - 1]) {
            sum += nums[r];
            r++;
            if (sum > largeSum) largeSum = sum;
        } else {
            if (sum > largeSum) largeSum = sum;
            l = r;
            r++;
            sum = nums[l];
        }
    }

    return largeSum;
};

// runtime 100th percentile
// memory 43rd percentile