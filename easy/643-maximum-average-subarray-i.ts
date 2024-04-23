// from 

function findMaxAverageFailed(nums: number[], k: number): number {
    if (nums.length === 1) return nums[0];
    if (nums.length === k) return nums.reduce((acc,curr) => acc + curr, 0) / k;
    let greatestSum = null;
    let left = 0;
    let right = k;
    while (right <= nums.length) {
        let sum = (nums.slice(left,right).reduce((acc,curr) => acc + curr, 0)) / k;
        if (greatestSum === null || sum > greatestSum) greatestSum = sum;
        left++;
        right++;
    }

    if (greatestSum === null) greatestSum = 1;

    return greatestSum;
};

// from chatGPT
function findMaxAverage(nums: number[], k: number): number {
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    
    let maxSum = windowSum;
    
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum / k;
};

// runtime 23rd percentile
// memory 62nd percentile