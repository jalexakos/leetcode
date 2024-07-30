// Check If a Word Occurs As a Prefix of Any Word in a Sentence
// from https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/description/

function isPrefixOfWord(sentence: string, searchWord: string): number {
    let sentSplit = sentence.split(' ');

    for (let i = 0; i < sentSplit.length; i++) {
        for (let x = 0; x < sentSplit[i].length; x++) {
            if (sentSplit[i].length < searchWord.length) continue;

            if (sentSplit[i].slice(0, searchWord.length) === searchWord) return i + 1;
        }
    }

    return -1;
};

// runtime 93rd percentile
// memory 70th percentile