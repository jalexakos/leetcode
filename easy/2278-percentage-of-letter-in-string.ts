// Percentage of Letter in String
// from https://leetcode.com/problems/percentage-of-letter-in-string/description/

function percentageLetter(s: string, letter: string): number {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === letter) count++;
    }

    return Math.floor((count/s.length) * 100);
};

// runtime 100th percentile
// memory 56th percentile