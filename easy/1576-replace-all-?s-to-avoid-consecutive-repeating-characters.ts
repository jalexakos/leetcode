// Replace All ?'s to Avoid Consecutive Repeating Characters
// from https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/description/

const alphabetInverseHash: Record<string, string> = {
    "0": 'a',
    "1": 'b',
    "2": 'c',
    "3": 'd',
    "4": 'e',
    "5": 'f',
    "6": 'g',
    "7": 'h',
    "8": 'i',
    "9": 'j',
    "10": 'k',
    "11": 'l',
    "12": 'm',
    "13": 'n',
    "14": 'o',
    "15": 'p',
    "16": 'q',
    "17": 'r',
    "18": 's',
    "19": 't',
    "20": 'u',
    "21": 'v',
    "22": 'w',
    "23": 'x',
    "24": 'y',
    "25": 'z'
};

function modifyString(s: string): string {
    let copyS = s;
    let charNum = 0;

    for (let i = 0; i < copyS.length; i++) {
        if (copyS[i] === "?") {
            while (copyS[i - 1] === alphabetInverseHash[String(charNum)] || copyS[i + 1] === alphabetInverseHash[String(charNum)]) {
                charNum++;
                if (charNum > 25) charNum = 0;
            }

            copyS = copyS.slice(0, i) + alphabetInverseHash[String(charNum)] + copyS.slice(i + 1, copyS.length);
        }
    }

    return copyS;
};

// runtime 82th percentile
// memory 56th percentile