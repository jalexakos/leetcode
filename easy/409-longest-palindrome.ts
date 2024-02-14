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

function longestPalindromeOptimized(s: string): number {
    if (s.length === 1) return 1;
    if (s.length === 2) {
        let sFlip = s.split('').reverse().join('');
        if (s === sFlip) return 2;
        return 1;
    }

    let map: Map<string,number> = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], (map.get(s[i]) as number + 1))
        } else {
            map.set(s[i], 1);
        }
    }

    let total = 0;
    let odd = 0;
    map.forEach((value) => {
        if (value % 2 === 0) {
            total += value;
        } else if (value %2 !== 0) {
            odd = 1;
            total += (value - 1);
        }
    })

    return (total + odd);
};

// runtime 91st percentile
// memory 28th percentile