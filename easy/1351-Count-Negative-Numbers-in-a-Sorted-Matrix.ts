// Count Negative Numbers in a Sorted Matrix
// from https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

function countNegatives(grid: number[][]): number {
    let countNegNums = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let k = 0; k < grid[i].length; k++) {
            if (grid[i][k] < 0) countNegNums++;
        }
    }

    return countNegNums;
};

// runtime 92nd percentile
// memory 75th percentile