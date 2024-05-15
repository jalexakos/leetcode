// from https://leetcode.com/problems/sum-of-digits-of-string-after-convert/description/

const alphabetHashFirstIndex: Record<string,number> = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
};

function getLucky(s: string, k: number): number {
    let digStr: string = "";
    let total: number = 0;

    for (let i = 0; i < s.length; i++) {
        digStr += String(alphabetHashFirstIndex[s[i]]);
    }

    while (k > 0) {
        for (let i = 0; i < digStr.length; i++) {
            if (i === 0) {
                total = Number(digStr[i]);
            } else {
                total += Number(digStr[i]);
            }
        }

        digStr = String(total);
        k--;
    }

    return total;
};

// runtime 61st percentile
// memory 64th percentile