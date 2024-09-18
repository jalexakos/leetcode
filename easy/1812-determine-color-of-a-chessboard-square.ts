// Determine Color of a Chessboard Square
// from https://leetcode.com/problems/determine-color-of-a-chessboard-square/description/

function squareIsWhite(coordinates: string): boolean {
    return (coordinates.charCodeAt(0) + Number(coordinates[1])) % 2 !== 0;
};

// runtime 63rd percentile
// memory 23rd percentile