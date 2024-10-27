// Find First Palindromic String in the Array
// from https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/

function isPalindrome(word: string): boolean {
    return word === word.split('').reverse().join('');
}

function firstPalindrome(words: string[]): string {
    for (let i in words) {
        if (isPalindrome(words[i])) return words[i];
    }

    return "";
};

// runtime 33rd percentile
// memory 18th percentile