// Longest Subsequence With Limited Sum
// from https://leetcode.com/problems/longest-subsequence-with-limited-sum/description/

function answerQueries(nums: number[], queries: number[]): number[] {
    let answer: number[] = [];
    let sortedNums = [...nums].sort((a,b) => a - b);
    let numsTotal = sortedNums.reduce((a,b) => a + b);

    for (let i = 0; i < queries.length; i++) {
        let val = queries[i];
        let l = 0;
        let r = sortedNums.length - 1;
        let sum = numsTotal;
        while (l <= r) {
            if (sum <= val) {
                answer.push(r + 1);
                break;
            }
            sum -= sortedNums[r];
            r--;
        }
        if (r === -1) answer.push(0);
    }

    return answer;
};

// runtime 13th percentile
// memory 75th percentile