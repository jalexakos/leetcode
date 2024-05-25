// from https://leetcode.com/problems/find-common-characters/description/

// from chatGPT
function commonChars(words: string[]): string[] {
    if (words.length === 0) return [];

    const aCharCode = 'a'.charCodeAt(0);

    // Initialize frequency array with the first word
    const minFreq: number[] = new Array(26).fill(Infinity);

    for (let char of words[0]) {
        minFreq[char.charCodeAt(0) - aCharCode]--;
    }

    // Update frequency array with the minimum frequency of each character in all words
    // I had to fix this, as it did not account for the edge case that a char would be in
    // every word except the first word. ChatGPT wanted to start w/ i = 1, but that meant 
    // it only found the minimum for words after the first word.
    for (let i = 0; i < words.length; i++) {
        const currentFreq: number[] = new Array(26).fill(0);
        for (let char of words[i]) {
            currentFreq[char.charCodeAt(0) - aCharCode]++;
        }
        for (let j = 0; j < 26; j++) {
            minFreq[j] = Math.min(minFreq[j], currentFreq[j]);
        }
    }

    // Collect the result based on the frequency array
    const result: string[] = [];
    for (let i = 0; i < 26; i++) {
        while (minFreq[i] > 0 && minFreq[i] !== Infinity) {
            result.push(String.fromCharCode(i + aCharCode));
            minFreq[i]--;
        }
    }

    return result;
}

// runtime 66th percentile
// memory 42nd percentile
