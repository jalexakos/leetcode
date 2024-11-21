// Count Asterisks
// from https://leetcode.com/problems/count-asterisks/description/

function countAsterisks(s: string): number {
    let counting = true;
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (counting && s[i] === "*") total++;
        else if (s[i] === "|") counting = !counting;
    }

    return total;
};

// runtime 100th percentile
// memory 15th percentile