// from https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/

function countCharacters(words: string[], chars: string): number {
    let answer: number = 0;
    const charsMap: Map<string, number> = new Map();
    
    for (let i = 0; i < chars.length; i++) {
        // see comment about '!' below.
        charsMap.set(chars[i], (charsMap.get(chars[i])! + 1 ?? 1));
    }

    for (let word = 0; word < words.length; word++) {
        let wordMap = new Map();
        for (let i = 0; i < words[word].length; i++) {
            wordMap.set(words[word][i], (wordMap.get(words[word][i]) + 1 ?? 1));
        }
        let possible = true;

        wordMap.forEach((v,k) => {
            if (charsMap.has(k)) {
                // I added the '!' because TS freaks out if I don't. This isn't ideal,
                // because as I understand it '!' is me telling my TS linter that I know  
                // the value won't be undefined. But that's not true, it's just that I'm 
                // handling the case where it is. Oh well.
                if (charsMap.get(k)! < v) {
                    possible = false;
                    return;
                    }
            } else {
                possible = false;
                return;
            }
        });

        if (possible) {
            answer += words[word].length;
        }
    }

    return answer;
};

// runtime 51st percentile
// memory 36th percentile