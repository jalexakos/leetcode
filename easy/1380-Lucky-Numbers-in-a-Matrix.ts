// Lucky Numbers in a Matrix
// from https://leetcode.com/problems/lucky-numbers-in-a-matrix/ 

function findMin (row: number[]): number[] {
    let minimum = Infinity;
    let idx = -1;

    for (let i = 0; i < row.length; i++) {
        if (row[i] < minimum) {
            minimum = row[i];
            idx = i;
        }
    }

    return [minimum, idx];
}

function luckyNumbers (matrix: number[][]): number[] {
    let answers = [];
    for (let i = 0; i < matrix.length; i++) {
        let maximum = true;
        let [minVal, idx] = findMin(matrix[i]);
        for (let x = 0; x < matrix.length; x++) {
            if (x === i) continue;
            else {
                if (matrix[x][idx] > minVal) {
                    maximum = false;
                    break;
                }
            }
        }
        if (maximum) answers.push(minVal);
    }

    return answers;
};

// runtime 98th percentile
// memory 100th percentile