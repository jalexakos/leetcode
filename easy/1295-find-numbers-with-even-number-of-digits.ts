// from https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/

function findNumbers(nums: number[]): number {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        let strNum = String(nums[i]);

        if (strNum.length % 2 == 0) total++;    
    }

    return total;
 };

 // runtime 55th percentile
 // memory 15th percentile