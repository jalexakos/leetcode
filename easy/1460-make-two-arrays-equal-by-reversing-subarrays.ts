// from https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/description/

function canBeEqual(target: number[], arr: number[]): boolean {
    let targetMap = new Map();
    let arrMap = new Map();

    for (let i = 0; i < target.length; i++) {
        targetMap.set(target[i], (targetMap.get(target[i]) || 0) + 1);
        arrMap.set(arr[i], (arrMap.get(arr[i]) || 0) + 1);
    }

    for (const [key, value] of targetMap.entries()) {
        if (!arrMap.has(key)) return false;

        if (arrMap.get(key) !== value) return false;
    }

    return true;
};

// runtime 52nd percentile
// memory 9th percentile