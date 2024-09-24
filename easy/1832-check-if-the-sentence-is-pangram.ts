// Check if the Sentence Is Pangram
// from https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/

function checkIfPangram(sentence: string): boolean {
    let charSet: Set<string> = new Set();
    for (let i = 0; i < sentence.length; i++) {
        charSet.add(sentence[i]);
    }

    return charSet.size === 26;
};

// runtime 52nd percentile
// memory 64th percentile