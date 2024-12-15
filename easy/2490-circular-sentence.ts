// Circular Sentence
// from https://leetcode.com/problems/circular-sentence/description/

function isCircularSentence(sentence: string): boolean {
    let splitSent = sentence.split(" ");
    let firstChar = splitSent[0][0];
    let lastChar = splitSent[splitSent.length - 1][splitSent[splitSent.length - 1].length - 1];
    if (firstChar !== lastChar) return false;
    for (let i = 0; i < splitSent.length - 1; i++) {
        lastChar = splitSent[i][splitSent[i].length - 1];
        firstChar = splitSent[i + 1][0];
        if (firstChar !== lastChar) return false;
    }
    return true;
};

// runtime 53rd percentile
// memory 44th percentile