// from https://leetcode.com/problems/maximum-number-of-balloons/description/

function countCharacters(word: string): Map<string, number> {
    const charCountMap = new Map<string, number>();

    for (const char of word) {
        if (charCountMap.has(char)) {
            charCountMap.set(char, charCountMap.get(char)! + 1);
        } else {
            charCountMap.set(char, 1);
        }
    }

    return charCountMap;
}

function maxNumberOfBalloons(text: string): number {
    let ballonMap = countCharacters('balloon');
    let textMap = countCharacters(text);

    let total = text.length;

    ballonMap.forEach((v,k) => {
        if (textMap.has(k)) {
            let dividedTotal = Math.floor(textMap.get(k)! / v);
            total = Math.min(dividedTotal, total);
        } else {
            total = 0;
            return;
        };
    })

    return total;
};

// runtime 75th percentile
// memory 91st percentile