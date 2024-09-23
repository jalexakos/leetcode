// Sign of the Product of an Array
// from https://leetcode.com/problems/sign-of-the-product-of-an-array/description/

function arraySign(nums: number[]): number {
    let prod = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) return 0;
        prod *= nums[i];
    }

    return prod > 0 ? 1 : -1;
};

// runtime 53rd percentile
// memory 63rd percentile