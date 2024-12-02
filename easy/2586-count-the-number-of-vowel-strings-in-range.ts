// Count the Number of Vowel Strings in Range
// from https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/description/

const vowelsLocal = new Set(["a", "e", "i", "o", "u"]);

function vowelStrings(words: string[], left: number, right: number): number {
    let count = 0;

    for (let i = left; i <= right; i++) {
        let word = words[i];
        if (vowelsLocal.has(word[0]) && vowelsLocal.has(word[word.length - 1])) count++;
    }
    

    return count;
};

// runtime 78th percentile
// memory 47th percentile