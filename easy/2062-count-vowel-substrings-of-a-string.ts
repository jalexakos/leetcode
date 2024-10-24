// Count Vowel Substrings of a String
// from https://leetcode.com/problems/count-vowel-substrings-of-a-string/description/

function countVowelSubstrings(word: string): number {
    const vowels: string[] = ["a", "e", "i", "o", "u"];

    if (word.length < 5) return 0;
    
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        for (let j = i + 5; j <= word.length; j++) {
            let tempWord = word.slice(i, j).split("");
            let letSet = new Set(tempWord);
            if (letSet.size !== 5) continue;
            
            let included = true;

            for (let x = 0; x < vowels.length; x++) {
                if (!letSet.has(vowels[x])) {
                    included = false;
                    break;
                }
            }
            if (included && letSet.size === 5) count++;
        }
    }

    return count;
};

// runtime 8th percentile
// memory 8th percentile