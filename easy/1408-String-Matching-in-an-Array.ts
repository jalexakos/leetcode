// String Matching in an Array
// https://leetcode.com/problems/string-matching-in-an-array/description/

function stringMatching(words: string[]): string[] {
    let matches: Set<string> = new Set();

    for (let i = 0; i < words.length; i++) {
        for (let k = 0; k < words.length; k++) {
            if (k === i) continue;
            
            if (words[i].length < words[k].length) continue;
            if (words[i].includes(words[k])) matches.add(words[k]);
        }
    }

    let newMatches: string[] = [...matches];
    return newMatches;
};

// runtime 58th percentile
// memory 44th percentile