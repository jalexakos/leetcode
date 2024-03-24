// from https://leetcode.com/problems/detect-capital/description/

function detectCapitalUse(word: string): boolean {
    if (word.length === 1) return true;
    let lower = word.toLowerCase();
    let upper = word.toUpperCase();
    let properCap = word[0].toUpperCase() + word.slice(1,word.length).toLowerCase();
    if (word === lower || word === upper || word === properCap) return true;

    return false;
};

// runtime 6th percentile
// memory 100th percentile