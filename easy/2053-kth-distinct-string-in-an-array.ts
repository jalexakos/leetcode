// Kth Distinct String in an Array
// from https://leetcode.com/problems/kth-distinct-string-in-an-array/description/

function kthDistinct(arr: string[], k: number): string {
    let strMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (strMap.has(arr[i])) {
            strMap.set(arr[i], strMap.get(arr[i]) + 1);
        } else {
            strMap.set(arr[i], 1);
        }
    }

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (strMap.get(arr[i]) === 1) {
            count++;
            if (count === k) return arr[i];
        }
    }

    return "";
};

// runtime 100th percentile
// memory 62nd percentile