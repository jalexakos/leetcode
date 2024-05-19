// from https://leetcode.com/problems/unique-number-of-occurrences/description/

function uniqueOccurrences(arr: number[]): boolean {
    let numMap = new Map();
    let numSet = new Set();
    let answer = true;

    for (let i = 0; i < arr.length; i++) {
        numMap.set(arr[i], (numMap.get(arr[i]) + 1 || 1));
    }

    numMap.forEach((v,k) => {
        if (numSet.has(v)) {
            answer = false;
            return;
        } else {
            numSet.add(v);
        }
    })

    return answer;
};

// runtime 71st percentile
// memory 57th percentile