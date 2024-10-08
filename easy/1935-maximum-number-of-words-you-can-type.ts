// Maximum Number of Words You Can Type
// from https://leetcode.com/problems/maximum-number-of-words-you-can-type/description/

function canBeTypedWords(text: string, brokenLetters: string): number {
    let count = 0;
    let words = text.split(' ');
    let letters = brokenLetters.split('');

    wordLoop: for (const word in words) {
        let included = false;
        letterLoop: for (const letter in letters) {
            if (words[word].includes(letters[letter])) {
                included = true;
                break letterLoop;
            }
        }
        if (!included) count++;
    }

    return count;
};

// runtime 48th percentile
// memory 5th percentile