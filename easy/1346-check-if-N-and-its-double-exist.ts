// Check If N and Its Double Exist
// from https://leetcode.com/problems/check-if-n-and-its-double-exist/description/

function checkIfExist(arr: number[]): boolean {
    let map = new Map();
    let answer = false;

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], [...map.get(arr[i]), i]);
        } else {
            map.set(arr[i], [i]);
        }
    }

    map.forEach((v,k) => {
        if (map.has(k * 2)) {
            if (k === 0) {
                if (map.get(k).length > 1) {
                    answer = true;
                }
            } else {
                answer = true;
            }
        };
    })

    return answer;
};

// runtime 59th percentile
// memory 9th percentile