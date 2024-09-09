// Check Array Formation Through Concatenation
// from https://leetcode.com/problems/check-array-formation-through-concatenation/description/

function canFormArray(arr: number[], pieces: number[][]): boolean {
    let combArr: number[] = [];
    let usedPieces = new Set();

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        for (let j = 0; j < pieces.length; j++) {
            if (pieces[j].includes(num) && !usedPieces.has(j)) {
                pieces[j].forEach((a) => combArr.push(a));
                usedPieces.add(j);
            }
        }
        if (arr[i] !== combArr[i]) return false;
    }

    return true;
};

// runtime 87th percentile
// memory 25th percentile