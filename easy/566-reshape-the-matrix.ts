// from https://leetcode.com/problems/reshape-the-matrix/description/

function flattenMatrix(matrix: number[][]): number[] {
    let flatMatrix: number[] = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let x = 0; x < matrix[i].length; x++) {
            flatMatrix.push(matrix[i][x]);
        }
    }

    return flatMatrix;
}

function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    let rows = mat.length;
    let cols = mat[0].length;

    if (rows * cols !== r * c) return mat;

    let newMat = new Array(r);
    for (let i = 0; i < newMat.length; i++) {
        newMat[i] = new Array(c);
    };

    let flatMatrix = flattenMatrix(mat);
    let y = 0;

    for (let i = 0; i < newMat.length; i++){
        for (let x = 0; x < newMat[i].length; x++) {
            newMat[i][x] = flatMatrix[y];
            y++;
        }
    }

    return newMat;
};

// runtime 50th percentile
// memory 25th percentile