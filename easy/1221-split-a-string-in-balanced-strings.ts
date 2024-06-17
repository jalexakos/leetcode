// from https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

function balancedStringSplit(s: string): number {
    let count = 0;

    let lCount = 0;
    let rCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') lCount++;
        else if (s[i] === 'R') rCount++;

        if (lCount === rCount) {
            count++;
            lCount = 0;
            rCount = 0;
        }
    }

    return count;
};

// runtime 47th percentile
// memory 86th percentile