// from https://leetcode.com/problems/valid-palindrome/description/

function isPalindrome(s: string): boolean {
    let sFree = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const sFreeReverse = sFree.split('').reverse().join('')
    return sFree === sFreeReverse;
};

// runtime 99th percentile
// memory 49th percentile