// Can Make Arithmetic Progression From Sequence
// from https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/description/

function canMakeArithmeticProgression(arr: number[]): boolean {
    const copyArr = [...arr].sort((a,b) => a - b);
    let diff = copyArr[0] - copyArr[1];
    for (let i = 1; i < copyArr.length - 1; i++) {
        if (copyArr[i] - copyArr[i + 1] !== diff) return false;
    }

    return true;
};

// runtime 39th percentile
// memory 53rd percentile