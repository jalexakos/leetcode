// from https://leetcode.com/problems/reverse-only-letters/description/

const alphabetHash917: Record<string,number> = {
    'a': 1,
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


function reverseOnlyLetters(s: string): string {
    let left = 0;
    let right = s.length - 1;
    let sArr = s.split('');
    
    while (left < right) {
        if (alphabetHash917[sArr[left].toLowerCase()]) {

            while (!alphabetHash917[sArr[right].toLowerCase()]) {
                right--;
            }
            
            let temp = sArr[left];
            sArr[left] = sArr[right];
            sArr[right] = temp;
            left++;
            right--;
        } else {
            left++;
        }
    }

    return sArr.join('');
};

// runtime 92nd percentile
// memory 51st percentile