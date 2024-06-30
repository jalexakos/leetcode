// Longest Substring Without Repeating Characters
// from https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

function lengthOfLongestSubstring(s: string): number {
    if (s.length < 2) return s.length;
    
    let length = 1;
    let left = 0;
    let right = 1;

    let map: Map<string,number> = new Map([[s[0], 1]]);

    while (right < s.length && left < s.length) {
        if (map.has(s[right])) {
            map.delete(s[left]);
            left++;
        } else {
            map.set(s[right], 1);
            if ((right + 1) - left > length) {
                length = (right + 1) - left;
            }
            right++;
        }
    }

    return length;
};

// runtime 76th percentile
// memory 61st percentile