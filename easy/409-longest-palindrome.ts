// from https://leetcode.com/problems/longest-palindrome/

function longestPalindrome(s: string): number {
    if (s.length === 1) return 1;
    if (s.length === 2) {
        let sFlip = s.split('').reverse().join('');
        if (s === sFlip) return 2;
        return 1;
    }

    let setOfS = new Set(s);
    let hash: Record<string,number> = {};
    for (let i = 0; i < s.length; i++){
        if (hash[s[i]]) {
            hash[s[i]]++;
        } else {
            hash[s[i]] = 1;
        }
    }

    let longestOdd = 0;
    let total = 0;
    for (const letter of setOfS) {
        if (hash[letter] % 2 === 0) {
            total += hash[letter];
        } else {
            if (hash[letter] > longestOdd) {
                if (longestOdd > 2) total += (longestOdd - 1);
                longestOdd = hash[letter];
            } else {
                total += (hash[letter] - 1);
            }
        }
    }

    return (total + longestOdd)
};

// runtime 30th percentile
// memory 8th percentile