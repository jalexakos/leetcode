// Widest Vertical Area Between Two Points Containing No Points
// from https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/description/

function maxWidthOfVerticalArea(points: number[][]): number {
    let gap = 0;
    points.sort((a,b) => a[0] - b[0]);
    for (let i = 0; i < points.length - 1; i++) {
        if (points[i + 1][0] - points[i][0] > gap) gap = points[i + 1][0] - points[i][0];
    }

    return gap;
};

// runtime 28th percentile
// memory 98th percentile