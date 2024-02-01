// from https://leetcode.com/problems/first-unique-character-in-a-string/

function firstUniqChar(s: string): number {
    let hash: Record <string,number> = {};

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]]) hash[s[i]] = hash[s[i]] + 1;
        else hash[s[i]] = 1;
    }

    for (let x = 0; x < s.length; x++) {
        if (hash[s[x]] === 1) return x;
    }

    return -1;
};

console.log(firstUniqChar('leetcode')) // 0 
console.log(firstUniqChar("loveleetcode")) // 2
console.log(firstUniqChar("aabb")) // -1

// runtime 26th percentile
// memory 32nd percentile