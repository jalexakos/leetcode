// Sorting the Sentence
// from https://leetcode.com/problems/sorting-the-sentence/description/

function sortSentence(s: string): string {
    let splitStr = s.split(" ");
    let answerArr: string[] = Array(splitStr.length).fill('');
    for (let i = 0; i < splitStr.length; i++) {
        let word = splitStr[i];
        let dig = Number(word[word.length - 1]);
        if (!Number.isNaN(dig)) {
            answerArr[dig - 1] = word.slice(0,word.length - 1);
        } else {
            throw new Error('Uh oh');
        }
    }
    return answerArr.join(" ");
};

// runtime 77th percentile
// memory 9th percentile