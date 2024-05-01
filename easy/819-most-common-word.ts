// from https://leetcode.com/problems/most-common-word/

function mostCommonWord(paragraph: string, banned: string[]): string {
    let wordMap = new Map();
    let paraArray = paragraph.toLowerCase().split(/[^a-zA-Z]+/);

    for (let i = 0; i < paraArray.length; i++) {
        if (!banned.includes(paraArray[i]) && paraArray[i].length !== 0) {
            wordMap.set(paraArray[i], (wordMap.has(paraArray[i]) ? (wordMap.get(paraArray[i]) + 1) : 1));
        }
    }

    let count = 0;
    let word = '';

    wordMap.forEach((v,k) => {
        if (v > count) {
            count = v;
            word = k;
        }
    })

    return word;
};

// runtime 95th percentile
// memory 100th percentile