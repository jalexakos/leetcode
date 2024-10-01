// Find Greatest Common Divisor of Array
// from https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/

function findGCD(nums: number[]): number {
    let smallest = 1001;
    let largest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) largest = nums[i];
        if (nums[i] < smallest) smallest = nums[i];
    }

    for (let i = smallest; i > 0; i--) {
        if (largest % i === 0 && smallest % i === 0) return i;
    }

    return 1;
};

// runtime 14th percentile
// memory 18th percentile