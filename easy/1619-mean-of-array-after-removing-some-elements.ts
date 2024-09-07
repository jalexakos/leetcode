// Mean of Array After Removing Some Elements
// from LeetCode: https://leetcode.com/problems/mean-of-array-after-removing-some-elements/

function trimMean(arr: number[]): number {
    let copyArr = [...arr].sort((a,b) => a - b);
    let removeCount = copyArr.length / 20;
    copyArr = copyArr.slice(removeCount, copyArr.length - removeCount);

    return copyArr.reduce((a,b) => a + b) / copyArr.length;
};

// runtime 81st percentile
// memory 72nd percentile