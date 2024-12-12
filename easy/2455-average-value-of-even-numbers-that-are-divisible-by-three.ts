// Average Value of Even Numbers That Are Divisible by Three
// from https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/description/

function averageValue(nums: number[]): number {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 3 === 0 && nums[i] % 2 === 0) {
            sum += nums[i];
            count++;
        }
    }
    if (count === 0) return 0;

    return Math.floor(sum / count);
};

// runtime 100th percentile
// memory 100th percentile