// Substrings of Size Three with Distinct Characters
// from https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/

function countGoodSubstrings(s: string): number {
    let count = 0;
    for (let i = 0; i < s.length - 2; i++) {
        let subSet = new Set(s.slice(i, i + 3));

        if (subSet.size === 3) count++;
    }

    return count;
};

// runtime 74th percentile
// memory 50th percentile