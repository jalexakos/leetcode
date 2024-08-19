// Count the Number of Consistent Strings
// from https://leetcode.com/problems/count-the-number-of-consistent-strings/description/

function countConsistentStrings(allowed: string, words: string[]): number {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (allowed.includes(words[i][j])) {
                if (j === words[i].length - 1) count++;
                continue;
            }
            else break;
        }
    }

    return count;
};

// runtime 35th percentile
// memory 68th percentile