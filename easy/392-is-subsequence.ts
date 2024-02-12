// from https://leetcode.com/problems/is-subsequence

function isSubsequence(s: string, t: string): boolean {
    let sPointer = 0;
    let tPointer = 0;
    while (tPointer < t.length && sPointer < s.length) {
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
            tPointer++;
        } else {
            tPointer++;
        }
    }

    if (sPointer === s.length) return true;

    return false;
};

// runtime 38th percentile
// memory 40th percentile