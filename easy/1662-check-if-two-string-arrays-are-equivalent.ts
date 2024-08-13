// Check If Two String Arrays are Equivalent
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/

function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let string1 = word1.reduce((a,b) => a + b, "");
    let string2 = word2.reduce((a,b) => a + b, "");

    return string1 === string2;
};

// runtime 72nd percentile
// memory 92nd percentile