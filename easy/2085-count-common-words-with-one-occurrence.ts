// Count Common Words With One Occurrence
// https://leetcode.com/problems/count-common-words-with-one-occurrence/description/

function countWords(words1: string[], words2: string[]): number {
    let words1Map = new Map();
    let words2Map = new Map();
    for (let i = 0; i < words1.length; i++) {
        let word = words1[i];
        if (words1Map.has(word)) {
            words1Map.set(word, words1Map.get(word) + 1);
        } else {
            words1Map.set(word, 1);
        }
    }

    for (let i = 0; i < words2.length; i++) {
        let word = words2[i];
        if (words2Map.has(word)) {
            words2Map.set(word, words2Map.get(word) + 1);
        } else {
            words2Map.set(word, 1);
        }
    }
    
    let count = 0;
    let wordSet = new Set();
    words1Map.forEach((v,k) => {
        if (v === 1) wordSet.add(k);
    })

    words2Map.forEach((v,k) => {
        if (wordSet.has(k) && v === 1) count++
    })

    return count;
};

// runtime 100th percentile
// memory 84th percentile