// from https://leetcode.com/problems/excel-sheet-column-number/

const letterMap: Record<string, number> = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8,
    'I': 9,
    'J': 10,
    'K': 11,
    'L': 12,
    'M': 13,
    'N': 14,
    'O': 15,
    'P': 16,
    'Q': 17,
    'R': 18,
    'S': 19,
    'T': 20,
    'U': 21,
    'V': 22,
    'W': 23,
    'X': 24,
    'Y': 25,
    'Z': 26,
  };
  
function titleToNumber(columnTitle: string): number {
    let total = 0;
    for (let digit = 0; digit < columnTitle.length; digit++){
        total += letterMap[columnTitle[digit]] * (26 ** ((columnTitle.length - 1) - digit));
    }

    return total;
};

// runtime 32nd percentile
// memory 36th percentile