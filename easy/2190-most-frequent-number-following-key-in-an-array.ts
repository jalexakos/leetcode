// Most Frequent Number Following Key In an Array
// from https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/description/

function mostFrequent(nums: number[], key: number): number {
    let target = 0;
    let count = 0;
    let map = new Map();
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === key) {
            if (map.has(nums[i + 1])) {
                map.set(nums[i + 1], map.get(nums[i + 1]) + 1);
            } else {
                map.set(nums[i + 1], 1);
            }
        }
    }

    map.forEach((v,k) => {
        if (v > count) {
            count = v;
            target = k;
        }
    })

    return target;
};

// runtime 91st percentile
// memory 87th percentile