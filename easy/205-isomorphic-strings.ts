// from https://leetcode.com/problems/isomorphic-strings/description/

function isIsomorphic(s: string, t: string): boolean {
    let hashS: Record<string,string> = {};

    for (let i = 0; i < s.length; i++){
        if (hashS[s[i]]) {
            if (hashS[s[i]] !== t[i]) return false;
        }
        else {
            hashS[s[i]] = t[i];
        }
    }

    let hashT: Record<string,string> = {};

        for (let i = 0; i < t.length; i++){
        if (hashT[t[i]]) {
            if (hashT[t[i]] !== s[i]) return false;
        }
        else {
            hashT[t[i]] = s[i];
        }
    }
    

    return true;
};

// runtime 42nd percentile
// memory 5th percentile

// I don't like this solution. There's something here I could improve on. Just have to figure out what.