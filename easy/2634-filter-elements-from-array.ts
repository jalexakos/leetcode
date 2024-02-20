// from https://leetcode.com/problems/filter-elements-from-array/

type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            answer.push(arr[i])
        }
    }

    return answer;
};

// runtime 19th percentile
// memory 46th percentile