// from https://leetcode.com/problems/check-if-it-is-a-straight-line/description/

// from ChatGPT
function checkStraightLine(coordinates: number[][]): boolean {
    const n = coordinates.length;
    if (n <= 2) return true;  // Two or fewer points are always collinear

    // Calculate the slope between the first two points
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    const dx = x1 - x0;
    const dy = y1 - y0;

    for (let i = 2; i < n; i++) {
        const [x2, y2] = coordinates[i];
        if (dy * (x2 - x1) !== dx * (y2 - y1)) {
            return false;
        }
    }

    return true;
};

// runtime 22nd percentile
// memory 15th percentile

// my failed attempt (doesn't work when x is 0)
function checkStraightLineFailed(coordinates: number[][]): boolean {
    let ratio = (coordinates[0][1] - coordinates[1][1]) / (coordinates[0][0] - coordinates[1][0]);

    for (let i = 0; i < coordinates.length - 1; i++) {
        let tempRatio = (coordinates[i][1] - coordinates[i + 1][1]) / (coordinates[i][0] - coordinates[i + 1][0]);

        if (tempRatio !== ratio) return false;
    }

    return true;
};