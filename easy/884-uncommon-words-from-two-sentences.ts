// from https://leetcode.com/problems/uncommon-words-from-two-sentences/description/

function uncommonFromSentences(s1: string, s2: string): string[] {
    let s1Arr = s1.split(' ');
    let s2Arr = s2.split(' ');
    let wordMap = new Map();
    let answer: string[] = [];

    for (let i = 0; i < s1Arr.length; i++) {
        wordMap.set(s1Arr[i], (wordMap.get(s1Arr[i]) + 1 || 1));
    }

    for (let i = 0; i < s2Arr.length; i++) {
        wordMap.set(s2Arr[i], (wordMap.get(s2Arr[i]) + 1 || 1));
    }

    wordMap.forEach((v,k) => {
        if (v === 1) answer.push(k);
    })

    return answer;
};

// runtime 96th percentile
// memory 78th percentile