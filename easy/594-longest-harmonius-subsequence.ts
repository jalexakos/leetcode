// from https://leetcode.com/problems/longest-harmonious-subsequence/description/

function findLHS(nums: number[]): number {
    let hash: Record<string,number> = {};
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = (hash[nums[i]] || 0) + 1;
    }

    let harmony = 0;
    const keysArray = Object.keys(hash).map(Number).sort((a,b) => a - b);

    let left = 0;
    let right = 1;
    while (right < keysArray.length) {
        if (Math.abs(keysArray[right] - keysArray[left]) === 1) {
            if ((hash[keysArray[right]] + hash[keysArray[left]]) > harmony) {

                harmony = hash[keysArray[right]] + hash[keysArray[left]];
            }
        }

        left = right;
        right++;
    }

    return harmony;
};

// runtime 12th percentile
// memory 6th percentile