// Separate the Digits in an Array
// from https://leetcode.com/problems/separate-the-digits-in-an-array/description/

function separateDigits(nums: number[]): number[] {
    let answer: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 9) {
            let arrStrNum: string[] = String(nums[i]).split("");
            arrStrNum.forEach(num => {
                if (!Number.isNaN(Number(num))) answer.push(Number(num));
            })
            
        } else {
            answer.push(nums[i]);
        }
    }

    return answer;
};

// runtime 42nd percentile
// memory 29th percentile

function separateDigitAlt(nums: number[]): number[] {
    let answer: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 9) {
            let num = nums[i];
            let arr = [];
            while (num) {
                let rem = num % 10;
                arr.unshift(rem);
                num = Math.floor(num / 10);
            }
            arr.forEach(num => answer.push(num));
        } else {
            answer.push(nums[i]);
        }
    }

    return answer;
};

// runtime 34th percentile
// memory 44th percentile