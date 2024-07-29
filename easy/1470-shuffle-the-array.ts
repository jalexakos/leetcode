// Shuffle the Array
// from https://leetcode.com/problems/shuffle-the-array/description/

function shuffle(nums: number[], n: number): number[] {
    let shuffled: number[] = [];

    for (let i = 0; i < nums.length / 2; i++) {
        shuffled.push(nums[i], nums[i + n]);
    }

    return shuffled;
};

// runtime 66th percentile
// memory 90th percentile