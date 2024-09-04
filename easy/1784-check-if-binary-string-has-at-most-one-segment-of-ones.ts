// Check if Binary String Has at Most One Segment of Ones
// from https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/description/

function checkOnesSegment(s: string): boolean {
    let firstSwitch = false;

    for (let i = 0; i < s.length; i++) {
        if (i === 0 && s[i] === "0") return false;
        if (s[i] === "0") firstSwitch = true;
        if (s[i] === "1" && firstSwitch) return false;
    }
    
    return true;
};

// runtime 100th percentile
// memory 12th percentile