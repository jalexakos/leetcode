// Check If String Is a Prefix of Array
// from https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/description/

function isPrefixString(s: string, words: string[]): boolean {
    let start = 0;
    let i = 0;
    let comboLen = 0;
    while (start < s.length && i < words.length) {
        let word = words[i];
        if (word !== s.slice(start, start + word.length)) return false;
        start += word.length;
        comboLen += word.length;
        i++;
    }

    if (comboLen < s.length) return false;

    return true;
};

// runtime 91st percentile
// memory 62nd percentile