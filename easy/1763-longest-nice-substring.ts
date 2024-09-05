// Longest Nice Substring
// from https://leetcode.com/problems/longest-nice-substring/description/

const charMap: Record<string, string> = {
    "a": "A",
    "A": "a",
    "b": "B",
    "B": "b",
    "c": "C",
    "C": "c",
    "d": "D",
    "D": "d",
    "e": "E",
    "E": "e",
    "f": "F",
    "F": "f",
    "g": "G",
    "G": "g",
    "h": "H",
    "H": "h",
    "i": "I",
    "I": "i",
    "j": "J",
    "J": "j",
    "k": "K",
    "K": "k",
    "l": "L",
    "L": "l",
    "m": "M",
    "M": "m",
    "n": "N",
    "N": "n",
    "o": "O",
    "O": "o",
    "p": "P",
    "P": "p",
    "q": "Q",
    "Q": "q",
    "r": "R",
    "R": "r",
    "s": "S",
    "S": "s",
    "t": "T",
    "T": "t",
    "u": "U",
    "U": "u",
    "v": "V",
    "V": "v",
    "w": "W",
    "W": "w",
    "x": "X",
    "X": "x",
    "y": "Y",
    "Y": "y",
    "z": "Z",
    "Z": "z"
  };
  
function isNiceSubstring(s: string): boolean {
    let charSet = new Set(s);
    for (let char of charSet) {
        if (!charSet.has(charMap[char])) return false;
    }

    return true;
};

function longestNiceSubstring(s: string): string {
    if (s.length === 1) return "";
    let subStr = "";
    let left = 0;
    while (left < s.length) {
        let right = left + 2;
        while (right <= s.length) {
            let tempStr = s.slice(left, right);
            if (isNiceSubstring(tempStr) && tempStr.length > subStr.length) {
                subStr = tempStr;
            }
            right++;
        }
        left++;
    }

    return subStr;
};

// tests
console.log(longestNiceSubstring("YazaAay")); // "aAa"
console.log(longestNiceSubstring("Bb")); // "Bb"
console.log(longestNiceSubstring("c")); // ""

// runtime 7th percentile
// memory 53rd percentile