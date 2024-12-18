// Difference Between Element Sum and Digit Sum of an Array
// from https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/

function differenceOfSum(nums: number[]): number {
    let elemSum = 0;
    let digSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 9) {
            let arrNum = String(nums[i]).split("");
            arrNum.forEach(num => {
                digSum += Number(num);
            })
            elemSum += nums[i];
        }
    }

    return Math.abs(elemSum - digSum);
};

// runtime 38th percentile
// memory 22nd percentile