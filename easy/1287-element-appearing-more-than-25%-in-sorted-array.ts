// Element Appearing More Than 25% In Sorted Array
// from https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/

function findSpecialInteger(arr: number[]): number {
    let quarterArrLen = Math.floor(arr.length / 4);
    let count = 1;
    let curr = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === curr) count++;
        else {
            curr = arr[i];
            count = 1;
        }
        if (count > quarterArrLen) return curr;
    }

    return curr;
};

// runtime 40th percentile
// memory 67th percentile