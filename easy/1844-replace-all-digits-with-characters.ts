// Replace All Digits with Characters
// from https://leetcode.com/problems/replace-all-digits-with-characters/description/

function shift(c: string, x: number): string {
    return String.fromCharCode(c.charCodeAt(0) + x);
}

function replaceDigits(s: string): string {
    let newS = "";
    let i = 0;
    
    while (i < s.length - 1) {
        newS += s[i] + shift(s[i], Number(s[i + 1]));
        i += 2;
    }
    if (s.length % 2 !== 0) newS += s[s.length - 1];

    return newS;
};

// runtime 76th percentile
// memory 100th percentile