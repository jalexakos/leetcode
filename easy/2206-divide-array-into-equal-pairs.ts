// Divide Array Into Equal Pairs
// from https://leetcode.com/problems/divide-array-into-equal-pairs/description/

function divideArray(nums: number[]): boolean {
    let countMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (countMap.has(nums[i])) {
            countMap.set(nums[i], countMap.get(nums[i]) + 1);
        } else {
            countMap.set(nums[i], 1);
        }
    }
    let truth = true;

    countMap.forEach((v, k) => {
        if (v % 2 !== 0) truth = false;
    })

    return truth;
};

// runtime 88th percentile
// memory 69th percentile