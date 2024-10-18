// Convert 1D Array Into 2D Array
// from https://leetcode.com/problems/convert-1d-array-into-2d-array/description/

function construct2DArray(original: number[], m: number, n: number): number[][] {
    if (original.length / m !== n) return [];
    let matrix: number[][] = [];

    let arr: number[] = [];
    for (let val of original) {
        if (arr.length < n) {
            arr.push(val);
        } else {
            matrix.push(arr);
            arr = [val];
        }
    }
    matrix.push(arr);

    return matrix;
};

// runtime 65th percentile
// memory 34th percentile