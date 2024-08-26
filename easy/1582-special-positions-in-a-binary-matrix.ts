// Special Positions in a Binary Matrix
// from https://leetcode.com/problems/special-positions-in-a-binary-matrix/description/

function numSpecial(mat: number[][]): number {
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        let onlyInRow = true;
        let temp = 0;
        let idx = 0;
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1 && onlyInRow) {
                onlyInRow = false;
                temp = 1;
                idx = j;
                } else if (mat[i][j] === 1) {
                    temp = 0;
                }
            }
            if (temp === 1) {
                for (let k = 0; k < mat.length; k++) {
                    if (k === i) continue;
                    if (mat[k][idx] === 1) temp = 0;
                }
                count += temp;
            }
        }

    return count;
}

// runtime 71st percentile
// memory 93rd percentile