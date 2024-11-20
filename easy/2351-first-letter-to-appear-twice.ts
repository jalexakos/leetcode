// First Letter to Appear Twice
// from https://leetcode.com/problems/first-letter-to-appear-twice/description/

function repeatedCharacter(s: string): string {
    let charSet = new Set();

    for (let i = 0; i < s.length; i++) {
        if (charSet.has(s[i])) return s[i];
        charSet.add(s[i]);
    }

    return "";
};

// runtime 100th percentile
// memory 66th percentile