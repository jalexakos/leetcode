// Product of Array Except Self
// from https://leetcode.com/problems/product-of-array-except-self/description/

function productExceptSelf(nums: number[]): number[] {
    let answers = [];
    let prod = nums.reduce((a,b) => a * b, 1);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            answers.push(nums.slice(0,i).concat(nums.slice(i + 1, nums.length)).reduce((a,b) => a * b, 1));
        }
        else answers.push(prod / nums[i]);
    }

    return answers;
};

// runtime 45th percentile
// memory 86th percentile

