// Check if Word Equals Summation of Two Words
// from https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/description/

function calcDigitTenthPlace(s: string, idx: number): number {
    return (s.charCodeAt(idx) - 97) * Math.pow(10, (s.length - 1) - idx);
}

function getWordSum(s: string): number {
    let wordSum = 0;
    for (let i = 0; i < s.length; i++) {
        wordSum += calcDigitTenthPlace(s, i);
    }

    return wordSum;
}

function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    let firstWordSum = getWordSum(firstWord);
    let secondWordSum = getWordSum(secondWord);
    let targetWordSum = getWordSum(targetWord);

    return (firstWordSum + secondWordSum) === targetWordSum;
    
};

// runtime 55th percentile
// memory 26th percentile