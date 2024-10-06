// Check if All Characters Have Equal Number of Occurrences
// from https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

function areOccurrencesEqual(s: string): boolean {
    let charMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (charMap.has(s[i])) {
            charMap.set(s[i], charMap.get(s[i]) + 1);
        } else {
            charMap.set(s[i], 1);
        }
    }

    let num = charMap.get(s[0]);
    let equal = true;
    charMap.forEach((v,k) => {
        if (v !== num) equal = false;
    });

    return equal;
};

// runtime 42nd percentile
// memory 100th percentile