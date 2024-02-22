// from https://leetcode.com/problems/keyboard-row/

function findWords(words: string[]): string[] {
    let keyboardStrings = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    let answer = [];

    for (let i = 0; i < words.length; i++) {
        let lowerWord = words[i].toLowerCase();
        let stringLength = 0;
        let lowerWordLength = lowerWord.length;
        let firstLetterFoundArray: string[] = keyboardStrings.filter(string => {
            return string.search(lowerWord[0]) > -1;
        })
        while (stringLength < lowerWordLength) {
            if (firstLetterFoundArray[0].search(lowerWord[stringLength]) === -1){
                break;
            } 
            stringLength++;
        }

        if (stringLength === lowerWordLength) {
            answer.push(words[i]);
        }
    }

    return answer;
};

// runtime 36th percentile
// memory 15th percentile