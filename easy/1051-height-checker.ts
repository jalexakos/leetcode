// from https://leetcode.com/problems/height-checker/description/

function heightChecker(heights: number[]): number {
    let sortedHeights = [...heights].sort((a,b) => a - b);
    let count = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) count++;
    }

    return count;
};

// runtime 56th percentile
// memory 98th percentile