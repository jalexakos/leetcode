// from https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/description/

function oddCells(m: number, n: number, indices: number[][]): number {
    // create the matrix
    let matrix = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));

    for (let index of indices) {
        let row = matrix[index[0]];

        // fill rows
        for (let i = 0; i < row.length; i++) {
            row[i]++;
        }

        // fill columns
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][index[1]]++;
        }
    }

    let total = 0;

    // iterate through the matrix for odd numbers
    for (let i = 0; i < matrix.length; i++) {
        for (let x = 0; x < matrix[i].length; x++) {
            if (matrix[i][x] % 2 === 1) total++;
        }
    }

    return total;
};

// runtime 45th percentile
// memory 68th percentile