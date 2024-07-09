// Generate a String With Characters That Have Odd Counts
// from https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/description/

function generateTheString(n: number): string {
    let answerArr = Array(n).fill('a');

    if (n % 2 === 0) {
        answerArr.pop();
        answerArr.push('b');
    }

    return answerArr.join('');
};

// runtime 50th percentile
// memory 79th percentile