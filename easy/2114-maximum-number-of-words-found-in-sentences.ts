// Maximum Number of Words Found in Sentences
// from https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/

function mostWordsFound(sentences: string[]): number {
    let max = 0;
    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i].split(' ');
        if (sentence.length > max) max = sentence.length;
    }

    return max;
};

// runtime 96th percentile
// memory 67th percentile