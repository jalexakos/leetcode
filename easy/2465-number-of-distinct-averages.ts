// Number of Distinct Averages
// from https://leetcode.com/problems/number-of-distinct-averages/description/

function distinctAverages(nums: number[]): number {
    nums.sort((a,b) => a - b);
    let avgs: Set<number> = new Set();

    while (nums.length) {
        let min = nums.shift();
        let max = nums.pop();
        let avg = ((max || 0) + (min || 0)) / 2;

        if (!avgs.has(avg)) {
            avgs.add(avg);
        }
    }

    return avgs.size;
};

// runtime 100th percentile
// memory 86th percentile