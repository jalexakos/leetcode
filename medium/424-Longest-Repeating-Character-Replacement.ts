// Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/description/

// first attempt - failed
function characterReplacementFailed(s: string, k: number): number {
    let left = 0;
    let right = 1;
    let longest = 1;
    let mostCharCount = s[left];
    // init map
    let map: Map<string,number> = new Map();
    map.set(s[left], 1);

    while (right < s.length) {
        if (map.has(s[right])) {
            if (s[right] === mostCharCount) {
                map.set(s[right], map.get(s[right])! + 1);
                longest++;
            } else {
                let count = 0;
                map.forEach((v,k) => {
                    if (k !== mostCharCount) count += v;
                })

                if (count > k) {
                    map.clear();
                    map.set(s[right], 1);
                    mostCharCount = s[right];
                    left = right;
                } else {
                    longest++;
                }
            }

        } else if (map.size - 1 === k) {
            map.forEach((v,k) => {
                if (v > longest) {
                    longest = v;
                    mostCharCount = k;
                }
            })

            map.clear();
            map.set(s[right], 1);
            mostCharCount = s[right];
            left = right;
        } else {
            map.set(s[right], 1);
            longest++;
        }

        let charCount = map.get(mostCharCount) || 0;
        map.forEach((v,k) => {
            if (v > charCount) mostCharCount = k;
        });
        right++;
    }
    
    return longest;
};

// second attempt - failed
function characterReplacementFailedTwo(s: string, k: number): number {
    let left = 0;
    let right = 1;
    let longest = 1;
    let remainder = 0;
    let mostCharCount = s[left];
    // init map
    let map = new Map();
    map.set(s[left], 1);

    while (right < s.length) {
        if (map.has(s[right])) {
            if (s[right] === mostCharCount) {
                map.set(s[right], map.get(s[right]) + 1);
                longest++;
            } else {
                if (remainder === k) {
                    map.clear();
                    map.set(s[right], 1);
                    mostCharCount = s[right];
                    left = right;
                    remainder = 0;
                } else {
                    longest++;
                }
            }

        } else if (map.size - 1 === k) {
            map.clear();
            map.set(s[right], 1);
            mostCharCount = s[right];
            left = right;
            remainder = 0;
        } else {
            map.set(s[right], 1);
            longest++;
        }

        let charCount = map.get(mostCharCount);
        map.forEach((v,k) => {
            if (v > charCount) {  
                mostCharCount = k;
              }
        });
        map.forEach((v,k) => {
            if (k !== mostCharCount) {
              remainder += v;
              }
          })
        right++;
    }
    
    return longest;
};

// third attempt - failed
function characterReplacementFailedThree(s: string, k: number): number {
    let left = 0;
    let right = 1;
    let longest = 1;
    let currLong = 1;
    let mostCharCount = s[left];
    let charCount = 1;
    let remainder = 0;
    // init map
    let map: Map<string,number> = new Map();
    map.set(s[left], 1);

    while (right < s.length) {
        if (map.has(s[right])) {
            if (s[right] === mostCharCount) {
                map.set(s[right], map.get(s[right])! + 1);
                charCount++;
                currLong++;
            } else {
                if (map.get(s[right])! + 1 > charCount) {
                    remainder -= map.get(s[right])!;
                    remainder += map.get(mostCharCount)!;

                    if (remainder <= k) {
                        charCount = map.get(s[right])! + 1;
                        mostCharCount = s[right];
                        map.set(s[right], map.get(s[right])! + 1);
                        currLong++;
                    } else {
                        if (currLong > longest) longest = currLong;
                        map.clear();
                        map.set(s[right], 1);
                        mostCharCount = s[right];
                        charCount = 1;
                        left = right;
                        currLong = 1;
                        remainder = 0;
                    }
                } else {
                    remainder++;
                    if (remainder <= k) {
                        currLong++;
                    } else {
                        if (currLong > longest) longest = currLong;
                        map.clear();
                        map.set(s[right], 1);
                        mostCharCount = s[right];
                        charCount = 1;
                        left = right;
                        currLong = 1;
                        remainder = 0;
                    }
                }
            }
        } else {
            if (map.size - 1 === k || remainder + 1 > k) {
                    if (currLong > longest) longest = currLong;
                    map.clear();
                    map.set(s[right], 1);
                    mostCharCount = s[right];
                    charCount = 1;
                    left = right;
                    currLong = 1;
                    remainder = 0;
            } else {
                map.set(s[right], 1);
                remainder++;
                longest++;
            }
        }

        right++;
    }

    if (currLong > longest) longest = currLong;
    
    return longest;
};

// from ChatGPT
function characterReplacement(s: string, k: number): number {
    let maxLen = 0;
    let maxCount = 0;
    let left = 0;
    const count: Record<string, number> = {};

    for (let right = 0; right < s.length; right++) {
        const charRight = s[right];
        count[charRight] = (count[charRight] || 0) + 1;
        maxCount = Math.max(maxCount, count[charRight]);

        while ((right - left + 1) - maxCount > k) {
            const charLeft = s[left];
            count[charLeft]--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};

// runtime 86th percentile
// memory 53rd percentile

// characterReplacement("AABABBAAAAABA", 1); // 7