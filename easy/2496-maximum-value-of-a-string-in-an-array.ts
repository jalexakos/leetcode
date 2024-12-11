// Maximum Value of a String in an Array
// from https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/description/

function isNum(str: string): boolean {
    let num = Number(str);

    return !Number.isNaN(num);
}

function maximumValue(strs: string[]): number {
    let max = 0;

    for (let i = 0; i < strs.length; i++) {
        if (isNum(strs[i])) {
            if (Number(strs[i]) > max) max = Number(strs[i]);
        } else {
            if (strs[i].length > max) max = strs[i].length;
        }
    }

    return max;
};

// runtime 100th percentile
// memory 100th percentile