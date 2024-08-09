// Count Good Triplets
// from https://leetcode.com/problems/count-good-triplets/description/

function checkGood(num: number, val1: number, val2: number): boolean {
    return Math.abs(val1 - val2) <= num;
}

function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                let x = checkGood(a, arr[i], arr[j]);
                let y = checkGood(b, arr[j], arr[k]);
                let z = checkGood(c, arr[i], arr[k]);
                if (x && y && z) count++;
            }
        }
    }

    return count;
};

// runtime 65th percentile
// memory 100th percentile