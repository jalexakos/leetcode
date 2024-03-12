// from https://leetcode.com/problems/valid-anagram/description/

type Hash = Record<string,number>;

function isAnagram(s: string, t: string): boolean {
    if (s.length === 1) return s === t;
    if (s.length !== t.length) return false;

    let hashS: Hash = {};
    let hashT: Hash = {};
    for (let i = 0; i < s.length; i++) {
        hashS[s[i]] = (hashS[s[i]] || 0) + 1;
        hashT[t[i]] = (hashT[t[i]] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (hashS[s[i]] !== hashT[s[i]]) return false;
    }

    return true;
};

// runtime 77th percentile
// memory 51st percentile