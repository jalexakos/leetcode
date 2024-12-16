// Count Pairs Of Similar Strings
// from https://leetcode.com/problems/count-pairs-of-similar-strings/description/

function compareSets(a: Set<string>, b: Set<string>): boolean {
    let answer = true;

    a.forEach(v => {
        if (!b.has(v)) answer = false;
    })

    b.forEach(v => {
        if (!a.has(v)) answer = false;
    })

    return answer;
}

function similarPairs(words: string[]): number {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        let wordArr = words[i].split("");
        let wordSet: Set<string> = new Set(wordArr);

        for (let j = i + 1; j < words.length; j++) {
            let jWordSet = new Set(words[j].split(""));
            if (compareSets(wordSet, jWordSet)) count++;
        }
    }

    return count;
};

// runtime 18th percentile
// memory 60th percentile