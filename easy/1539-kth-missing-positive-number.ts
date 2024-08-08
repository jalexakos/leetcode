// Kth Missing Positive Number
// from https://leetcode.com/problems/kth-missing-positive-number/description/

function findKthPositive(arr: number[], k: number): number {
    let missingNums: number[] = [];
    let num = 1;

    for (let i = 0; i < arr.length; i++) {
        while (num !== arr[i]) {
            missingNums.push(num);
            num++;
        }
        num++;
    }

    while (missingNums.length < k) {
        missingNums.push(num);
        num++;
    }

    return missingNums[k - 1];
};

// runtime 60th percentile
// memory 21st percentile