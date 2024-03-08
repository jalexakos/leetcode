// from https://leetcode.com/problems/count-elements-with-maximum-frequency/description

function maxFrequencyElements(nums: number[]): number {
    let frequency = 0;
    let count = 0;
    let hashMap: Record<string,number> = {};

    // create hash of different nums
    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]]) {
            hashMap[nums[i]]++;
        } else {
            hashMap[nums[i]] = 1;
        }
    }

    // iterate through numbers and count
    for (const num in hashMap) {
        if (hashMap[num] > frequency) {
            frequency = hashMap[num];
            count = 1;
        } else if (hashMap[num] === frequency) {
            count++;
        }
    }

    return count * frequency;
};

// runtime 94th percentile
// memory 44th percentile