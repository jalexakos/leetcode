// Row With Maximum Ones
// from https://leetcode.com/problems/row-with-maximum-ones/description/

function rowAndMaximumOnes(mat: number[][]): number[] {
    let answer: number[] = [0,0];
    for (let i = 0; i < mat.length; i++) {
        let count = 0;
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) count++;
        }
        if (count > answer[1]) {
            answer = [i, count];
        }
    }

    return answer;
};

// runtime 39th percentile
// memory 87th percentile