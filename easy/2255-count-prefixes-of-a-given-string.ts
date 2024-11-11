// Count Prefixes of a Given String
// from https://leetcode.com/problems/count-prefixes-of-a-given-string/description/

function countPrefixes(words: string[], s: string): number {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        let len = words[i].length;
        if (s.slice(0,len) === words[i]) count++;
    }

    return count;
};

// runtime 100th percentile
// memory 90th percentile