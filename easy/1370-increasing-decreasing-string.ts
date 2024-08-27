// Increasing Decreasing String
// https://leetcode.com/problems/increasing-decreasing-string/description/

function sortString(s: string): string {
    let incDecStr = "";
    let charSet: Set<string> = new Set();
    let hash: Record<string, number> = {};

    for (let i = 0; i < s.length; i++) {
        charSet.add(s[i]);
        if (hash[s[i]]) {
            hash[s[i]] = hash[s[i]] + 1;
        } else {
            hash[s[i]] = 1;
        }
    }

    let charArr = Array.from(charSet).sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));

    let increasing = true;

    while (charArr.length > 0) {
        if (increasing) {
            for (let i = 0; i < charArr.length; i++) {
                incDecStr += charArr[i];
                hash[charArr[i]] = hash[charArr[i]] - 1;
                }

            charArr = charArr.filter((c) => hash[c] > 0);
        } else {
            for (let i = charArr.length - 1; i >= 0; i--) {
                incDecStr += charArr[i];
                hash[charArr[i]] = hash[charArr[i]] - 1;
                }
                
            charArr = charArr.filter((c) => hash[c] > 0);
        }

        increasing = !increasing;
    }

    return incDecStr;
};

// runtime 37th percentile
// memory 18th percentile