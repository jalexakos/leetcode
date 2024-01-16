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
    // let copyNum = columnNumber;
    let letters = 0;
    while (Math.floor(columnNumber / 26 ** letters) > 26){
        letters++;
        // copyNum = ;
    }

    if (columnNumber % 26 !== 0){
        letters++;
        columnTitle += alphabetObject[columnNumber % 26];
    }
    console.log('letters', letters);

    return columnTitle;
};

// Didn't finish - revisit