// Keep Multiplying Found Values by Two
// from https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/

function findFinalValue(nums: number[], original: number): number {
    let orgCopy = original;
    while (nums.includes(orgCopy)) {
        orgCopy *= 2;
    }

    return orgCopy;
};

// runtime 100th percentile
// memory 78th percentile