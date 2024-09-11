// Find Nearest Point That Has the Same X or Y Coordinate
// from https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/description/

function nearestValidPoint(x: number, y: number, points: number[][]): number {
    let point: number[] = [];
    let index: number = points.length;
    let manhatDist: number = Infinity;

    for (let i = 0; i < points.length; i++) {
        if (points[i][0] === x && points[i][1] === y) return i;
        else if (points[i][0] === x || points[i][1] === y) {
            let tempDist = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y);
            if (tempDist < manhatDist) {
                manhatDist = tempDist;
                index = i;
            } else if (tempDist === manhatDist) {
                if (i < index) index = i;
            }
        }
    }

    if (index === points.length) return -1;

    return index;
};

// runtime 70th percentile
// memory 72nd percentile