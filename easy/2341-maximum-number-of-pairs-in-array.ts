// Maximum Number of Pairs in Array
// from https://leetcode.com/problems/maximum-number-of-pairs-in-array/description/

function numberOfPairs(nums: number[]): number[] {
    if (nums.length === 1) return [0,1];
    let numMap: Map<number,number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (numMap.has(num)) {
            numMap.set(num, numMap.get(num)! + 1);
        } else {
            numMap.set(num, 1);
        }
    }

    let pairs = 0;
    let remainder = 0;
    numMap.forEach((v,k) => {
        while (v > 1) {
            v -= 2;
            pairs++;
        }
        if (v === 1) remainder++;
    });

    return [pairs, remainder];
};

// runtime 100th percentile
// memory 54th percentile