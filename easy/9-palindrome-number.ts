// from https://leetcode.com/problems/palindrome-number/description/

function isPalindromeNum(x: number): boolean {
    let numAsString = String(x);
    let reversedString = numAsString.split('').reverse().join('');

    return numAsString === reversedString;
};

// runtime 55th percentile
// memory 60th percentile