// from https://leetcode.com/problems/missing-number/

function missingNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);

    for (let num = 0; num < nums.length; num++){
        if (nums[num] !== num){
            return num;
        }
    }

    return nums.length++;
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))

// runtime 33rd percentile
// memory 5th percentile