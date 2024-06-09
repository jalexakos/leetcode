// from https://leetcode.com/problems/occurrences-after-bigram/description/

function findOcurrences(text: string, first: string, second: string): string[] {
    let answer = [];
    let textSplit = text.split(' ');

    for (let i = 0; i < textSplit.length - 2; i++) {
        if (textSplit[i] === first && textSplit[i + 1] === second) {
            answer.push(textSplit[i + 2]);
        }
    }

    return answer;
};

// runtime 94th percentile
// memory 65th percentile