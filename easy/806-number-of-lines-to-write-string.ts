// from https://leetcode.com/problems/number-of-lines-to-write-string/description/

const alphabetHash: Record<string, number> = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3,
    'e': 4,
    'f': 5,
    'g': 6,
    'h': 7,
    'i': 8,
    'j': 9,
    'k': 10,
    'l': 11,
    'm': 12,
    'n': 13,
    'o': 14,
    'p': 15,
    'q': 16,
    'r': 17,
    's': 18,
    't': 19,
    'u': 20,
    'v': 21,
    'w': 22,
    'x': 23,
    'y': 24,
    'z': 25
};

function numberOfLines(widths: number[], s: string): number[] {
    let totalLines = 1;
    let currentLineLength = 0;

    for (let i = 0; i < s.length; i++) {
        let charWidth = widths[alphabetHash[s[i]]];
        if ((currentLineLength + charWidth) > 100) {
            totalLines++;
            currentLineLength = charWidth;
        } else {
            currentLineLength += charWidth;
        }
    }

    return [totalLines, currentLineLength];
};

// runtime 25th percentile
// memory 100th percentile