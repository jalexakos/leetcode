// Maximum Product Difference Between Two Pairs
// from https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/

function maxProductDifference(nums: number[]): number {
    let largest = 0;
    let secondLargest = 0;
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            if (largest > secondLargest) {
                secondLargest = largest;
            }
            largest = nums[i];
        } else if (nums[i] > secondLargest) {
            secondLargest = nums[i];
        } 
        if (nums[i] < smallest) {
            if (smallest < secondSmallest) {
                secondSmallest = smallest;
            }
            smallest = nums[i];
        } else if (nums[i] < secondSmallest) {
            secondSmallest = nums[i];
        }
    }

    return (largest * secondLargest) - (smallest * secondSmallest);
};

// runtime 79th percentile
// memory 96th percentile