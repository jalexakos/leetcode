// from https://leetcode.com/problems/chunk-array/description/

// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    if (size > arr.length) {
        if (arr.length > 1) {
            return [arr];
        }
        return [];
    }
    
    let answer = [];
    const count = Math.floor(arr.length/size);
    const remainder = arr.length % size;

    let left = 0;
    let right = size;
    
    for (let i = 0; i < count; i++) {
        answer.push(arr.slice(left, right));
        left += size;
        right += size;
    }

    if (remainder > 0) {
        answer.push(arr.slice(left, arr.length));
    }

    return answer;
};

// runtime 98th percentile
// memory 58th percentile