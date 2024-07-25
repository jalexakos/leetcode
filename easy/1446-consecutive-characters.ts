// Consecutive Characters
// from https://leetcode.com/problems/consecutive-characters/description/

function maxPower(s: string): number {
    let power = 1;
    let char = s[0];
    let length = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === char) {
            length++;
        } else {
            if (length > power) power = length;
            char = s[i];
            length = 1;
        }
    }

    if (length > power) power = length;
    
    return power;
};

// runtime 34th percentile
// memory 90th percentile