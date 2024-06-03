// from https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/description/

const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

function cellsInRange(s: string): string[] {
    let cellSplit = s.split(':');
    let startPos = cellSplit[0].split('');
    let endPos = cellSplit[1].split('');
    let alphIdx = alphabet.indexOf(startPos[0]);
    let endIdx = alphabet.indexOf(endPos[0]) + 1;
    let answer = [];
    
    while (alphIdx < endIdx) {
        let char = alphabet[alphIdx];

        for (let i = Number(startPos[1]); i <= Number(endPos[1]); i++) {
            let cell = char + String(i);
            answer.push(cell);
        }

        alphIdx++;
    }

    return answer;
};

// runtime 10th percentile
// memory 89th percentile