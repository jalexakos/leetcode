// Rearrange Spaces Between Words
// from https://leetcode.com/problems/rearrange-spaces-between-words/description/

function reorderSpaces(text: string): string {
    let words: Array<string> = [];
    let word: string = "";
    let spaces = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            spaces++;
            if (word.length > 0) {
                words.push(word);
                word = "";
            }
        } else {
            word += text[i];
        }
    }

    if (word.length > 0) words.push(word);

    let wordCount = words.length;
    let remainder = spaces;
    let space = "";
    if (wordCount > 1) {
        remainder = spaces % (wordCount - 1);
        let avgSpace = Math.floor(spaces / (wordCount - 1));

        while (avgSpace > 0) {
            space += " ";
            avgSpace--;
        }
    }

    let answer = words.join(space);

    while (remainder > 0) {
        answer += " ";
        remainder--;
    }
    return answer;
};

// runtime 54th percentile
// memory 75th percentile