// from https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

function reverseWords(s: string): string {
    let wordsSplit = s.split(' ');
    for (let word in wordsSplit) {
        wordsSplit[word] = wordsSplit[word].split('').reverse().join('');
    }

    return wordsSplit.join(' ');
};

// runtime 59th percentile
// memory 16th percentile