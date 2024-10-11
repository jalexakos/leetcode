// Reverse Prefix of Word
// from https://leetcode.com/problems/reverse-prefix-of-word/description/

function reversePrefix(word: string, ch: string): string {
    if (!word.includes(ch)) return word;

    let idx = 0;
    while (true) {
        if (word[idx] === ch) break;
        idx++;
    }

    let prefix = word.slice(0, idx + 1).split('').reverse().join('');
    let rest = word.slice(idx + 1);
    return prefix + rest;
};

// runtime 81st percentile
// memory 86th percentile