// from https://leetcode.com/problems/excel-sheet-column-title/description/

const alphabetObject: Record<number, string> = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
    26: 'Z',
  };

function convertToTitle(columnNumber: number): string {
    if (columnNumber <= 26){
        return alphabetObject[columnNumber];
    }
    let columnTitle = '';

    while (columnNumber > 0){
            if (columnNumber % 26 !== 0){
                columnTitle = alphabetObject[columnNumber % 26] + columnTitle;
                columnNumber = Math.floor(columnNumber / 26);
            } else if (columnNumber % 26 === 0 && columnNumber > 26){
                columnTitle = "Z" + columnTitle;
                columnNumber = Math.floor((columnNumber - 26) / 26);
            } else {
                columnTitle = "Z" + columnTitle;
                columnNumber = 0;
            }
    }

    return columnTitle;
};

// runtime 72nd percentile
// memory 22nd percentile