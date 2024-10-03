// Truncate Sentence
// from https://leetcode.com/problems/truncate-sentence/description/

function truncateSentence(s: string, k: number): string {
    return s.split(' ').slice(0,k).join(" ");
};

// runtime 62nd percentile
// memory 95th percentile