// 1984. Minimum Difference Between Highest and Lowest of K Scores
// from https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/

function minimumDifference(nums: number[], k: number): number {
    let sortedNums = [...nums].sort((a,b) => a - b);

    let smallest = (10 ** 5) + 1;
    if (sortedNums.length === 1) return 0;
    for (let i = 0; i <= sortedNums.length - k; i++) {
        if ((sortedNums[i + k - 1] - sortedNums[i]) < smallest) {
            smallest = sortedNums[i + k - 1] - sortedNums[i];
        }
    }
    return smallest;
};

// runtime 21st percentile
// memory 28th percentile