// Decrypt String from Alphabet to Integer Mapping
// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/description/

const mapping: Record<string, string> = {
    "0": " ",
    "1": "a",
    "2": "b",
    "3": "c",
    "4": "d",
    "5": "e",
    "6": "f",
    "7": "g",
    "8": "h",
    "9": "i",
    "10#": "j",
    "11#": "k",
    "12#": "l",
    "13#": "m",
    "14#": "n",
    "15#": "o",
    "16#": "p",
    "17#": "q",
    "18#": "r",
    "19#": "s",
    "20#": "t",
    "21#": "u",
    "22#": "v",
    "23#": "w",
    "24#": "x",
    "25#": "y",
    "26#": "z"
};

function freqAlphabets(s: string): string {
    let answer = "";

    for (let i = 0; i < s.length; i++) {
        if (mapping[s[i]]) {
            answer += mapping[s[i]];
        } else {
            answer = answer.slice(0, answer.length - 2);
            answer += mapping[s.slice(i - 2, i + 1)];
        }
    }

    return answer;
};

// runtime 91st percentile
// memory 50th percentile