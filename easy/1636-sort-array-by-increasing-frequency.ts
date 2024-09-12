// Sort Array by Increasing Frequency
// from https://leetcode.com/problems/sort-array-by-increasing-frequency/description/

function frequencySort(nums: number[]): number[] {
    let copyNums = [...nums].sort((a,b) => b - a);
    let map = new Map();

    for (let i = 0; i < copyNums.length; i++) {
        if (map.has(copyNums[i])) {
            map.set(copyNums[i], map.get(copyNums[i]) + 1);
        } else {
            map.set(copyNums[i], 1);
        }
    }

    let counts: number[] = [];
    map.forEach((v,k) => counts.push(v));
    counts.sort((a,b) => a - b);
    let answer: number[] = [];

    while (answer.length < copyNums.length) {
        for (let i = 0; i < counts.length; i++) {
            map.forEach((v,k) => {
                if (v === counts[i]) {
                    let count = counts[i];
                    while (count > 0) {
                        answer.push(k);
                        count--;
                    }
                    map.delete(k);
                }
            })
        }
    }

    return answer;
};

// runtime 67th percentile
// memory 44th percentile