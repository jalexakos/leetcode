// Find the Array Concatenation Value
// from https://leetcode.com/problems/find-the-array-concatenation-value/description/

function findTheArrayConcVal(nums: number[]): number {
    let sum = 0;

    while (nums.length) {
        if (nums.length > 1) {
            let numL = nums.splice(0, 1)[0];
            let numR = nums.splice(nums.length - 1, 1)[0];
            sum += (Number(String(numL) + String(numR)));
        } else {
            let num = nums.splice(0, 1);
            sum += num[0];
        }
    }

    return sum;
};

// runtime 100th percentile
// memory 32nd percentile