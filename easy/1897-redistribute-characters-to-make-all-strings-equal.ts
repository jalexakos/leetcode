// Redistribute Characters to Make All Strings Equal
// from https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/description/

function makeEqual(words: string[]): boolean {
    let wordsLenTotal = 0;
    for (const word of words) {
     wordsLenTotal += word.length;
    }
 
    if (wordsLenTotal % words.length !== 0) return false;
 
    let wordMap = new Map();
 
    for (const word of words) {
     for (let i = 0; i < word.length; i++) {
         if (wordMap.has(word[i])) wordMap.set(word[i], wordMap.get(word[i]) + 1);
         else wordMap.set(word[i], 1);
     }
    }
 
    let enough = true;
 
    wordMap.forEach((v,k) => {
     if (v % words.length !== 0) enough = false;
    })
 
    return enough;
 };

// runtime 76th percentile
// memory 74th percentile