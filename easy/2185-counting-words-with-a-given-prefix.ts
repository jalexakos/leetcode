// Counting Words With a Given Prefix
// from https://leetcode.com/problems/counting-words-with-a-given-prefix/description/

function prefixCount(words: string[], pref: string): number {
    let len = pref.length;
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.slice(0,len) === pref) count++;
    }

    return count;
};

// runtime 50th percentile
// memory 50th percentile