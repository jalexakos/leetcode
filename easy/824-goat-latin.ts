// from https://leetcode.com/problems/goat-latin/description/

const vowelsGoat: Record<string,string> = {
    'a': 'a',
    'e': 'e',
    'i': 'i',
    'o': 'o',
    'u': 'u',
    'A': 'A',
    'E': 'E',
    'I': 'I',
    'O': 'O',
    'U': 'U'
}

function toGoatLatin(sentence: string): string {
    let sentArr = sentence.split(' ');
    let goatSent = [];
    for (let i = 0; i < sentArr.length; i++) {
        let newWord = '';
        if (vowelsGoat[sentArr[i][0]]) {
            newWord = sentArr[i] + 'ma';
        } else {
            newWord = sentArr[i].slice(1, sentArr[i].length) + sentArr[i][0] + 'ma';
        }

        let x = i + 1;
        while (x > 0) {
            newWord += 'a';
            x--;
        }

        goatSent.push(newWord);
    }

    return goatSent.join(' ');
};

// runtime 56th percentile
// memory 48th percentile