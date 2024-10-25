// Check if Numbers Are Ascending in a Sentence
// from https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/description/

function isNumber(str: string): boolean {
    return !Number.isNaN(Number(str));
}

function areNumbersAscending(s: string): boolean {
    let nums: number[] = [];
    let splitS = s.split(" ");

    for (let i = 0; i < splitS.length; i++) {
        if (isNumber(splitS[i])) nums.push(Number(splitS[i]));
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) return false;
    }

    return true;
};

// runtime 90th percentile
// memory 40th percentile