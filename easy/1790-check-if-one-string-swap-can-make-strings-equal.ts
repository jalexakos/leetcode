// Check if One String Swap Can Make Strings Equal
// from https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/description/

function areAlmostEqual(s1: string, s2: string): boolean {
    function addToMaps(map: Map<string, number>, char: string): void {
        if (map.has(char)) {
            map.set(char, map.get(char)! + 1);
        } else {
            map.set(char, 1);
        }
    }

    if (s1 === s2) return true;

    let oneMap = new Map();
    let twoMap = new Map();

    let diffCount = 0;
    let charSet = new Set();

    for (let i = 0; i < s1.length; i++) {
        addToMaps(oneMap, s1[i]);
        addToMaps(twoMap, s2[i]);

        if (s1[i] !== s2[i]) {
            if (diffCount === 2) return false;
            let setMissChars = !charSet.has(s1[i]) || !charSet.has(s2[i]);
            if (diffCount === 1 && setMissChars) return false;
            diffCount++;
            charSet.add(s1[i]);
            charSet.add(s2[i]);
        }
    }

    let answer = true;
    oneMap.forEach((v,k) => {
        if (!twoMap.has(k)) answer = false;
        if (!(twoMap.get(k) + 1 !== v) || !(twoMap.get(k) - 1 !== v)) answer = false;
    });

    twoMap.forEach((v,k) => {
        if (!oneMap.has(k)) answer = false;
        if (!(oneMap.get(k) + 1 !== v) || !(oneMap.get(k) - 1 !== v)) answer = false;
    });

    return answer;
};

// runtime 66th percentile
// memory: 51st percentile