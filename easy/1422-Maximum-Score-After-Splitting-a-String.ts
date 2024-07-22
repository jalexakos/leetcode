// Maximum Score After Splitting a String
// https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/

// first solution
function countStr(s: string, val: string): number {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === val) count++;
    }

    return count;
}

function maxScore(s: string): number {
    let score = 0;
    let left: number;
    let right: number;

    for (let i = 1; i < s.length; i++) {
        left = countStr(s.slice(0,i), '0');
        right = countStr(s.slice(i), '1');

        if (left + right > score) score = left + right;
    }

    return score;
};

// runtime 49th percentile
// memory 22nd percentile

// second solution - optimized
// re-uses the countStr function

function maxScoreOpt(s: string): number {
    let left: number = countStr(s.slice(0,1), '0');
    let right: number = countStr(s.slice(1), '1');
    let score = left + right;

    for (let i = 1; i < s.length - 1; i++) {
        if (s[i] === '1') {
            right--;
        } 
        else {
            left++;
        }
        
        if (left + right > score) score = left + right;
    }

    return score;
};

// runtime 94th percentile
// memory 81st percentile