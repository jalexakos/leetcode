// Find Lucky Integer in an Array
// https://leetcode.com/problems/find-lucky-integer-in-an-array/description/

function findLucky(arr: number[]): number {
    let map: Map<number, number> = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i])! + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    let largest = -1;
    map.forEach((v,k) => {
        if (v === k) {
            if (k > largest) {
                largest = k;
            }
        }
    })

    return largest;
};

// runtime 82nd percentile
// memory 76th percentile