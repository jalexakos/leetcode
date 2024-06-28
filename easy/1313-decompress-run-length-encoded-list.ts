// from https://leetcode.com/problems/decompress-run-length-encoded-list/description/

function decompressRLElist(nums: number[]): number[] {
    let answer: number[] = [];

    for (let i = 0; i < nums.length - 1; i += 2) {
        let count = nums[i];
        let val = nums[i + 1];

        while (count > 0) {
            answer.push(val);
            count--;
        }
    }

    return answer;
};

// runtime 45th percentile
// memory 33rd percentile