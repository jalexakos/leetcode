// Number of Strings That Appear as Substrings in Word
// from https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/description/

function numOfStrings(patterns: string[], word: string): number {
    let count = 0;
    for (let i = 0; i < patterns.length; i++) {
        if (word.includes(patterns[i])) count++;
    }

    return count;
};

// runtime 79th percentile
// memory 62nd percentile