// Shortest Distance to Target String in a Circular Array
// from https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/description/

function findLeft(tar: number, idx: number, len: number): number {
    if (tar === idx) return 0;
    if (tar < idx) return idx - tar;
    return idx + (len - tar);
}

function findRight(tar: number, idx: number, len: number): number {
    if (tar === idx) return 0;
    if (tar > idx) return tar - idx;
    return (len - idx) + tar;
}

function closetTarget(words: string[], target: string, startIndex: number): number {
    let tArr: number[] = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i] === target) tArr.push(i);
    }

    if (!tArr.length) return -1;

    let smallest = words.length;

    for (let i = 0; i < tArr.length; i++) {
        let left = findLeft(tArr[i], startIndex, words.length);
        let right = findRight(tArr[i], startIndex, words.length);

        if (Math.min(left, right) < smallest) smallest = Math.min(left, right);
    }

    return smallest;
};

// runtime 100th percentile
// memory 90th percentile