// Make Array Zero by Subtracting Equal Amounts
// from https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/

function minimumOperations(nums: number[]): number {
    let steps = 0;
    let min = 101;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min && nums[i] > 0) min = nums[i];
        sum += nums[i];
    }
    if (sum === 0) return 0;

    while (true) {
        // check if all #s are zero - if so break
        sum = 0;
        let tempMin = 101;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) nums[i] -= min;
            if (nums[i] < tempMin && nums[i] > 0) tempMin = nums[i];
            sum += nums[i];
        }
        steps++;
        if (sum === 0) break;
        min = tempMin;
    }

    return steps;
};

// runtime 100th percentile
// memory 36th percentile