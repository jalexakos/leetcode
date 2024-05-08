// from https://leetcode.com/problems/positions-of-large-groups/description/

function largeGroupPositions(s: string): number[][] {
    let answer: Array<Array<number>> = [];
    let char = s[0];
    let idx = 0;
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === char) {
            count++;
        } else {
            if (count >= 3) {
                answer.push([idx, i - 1]);
            }
            count = 1;
            idx = i;
            char = s[i];
        }
    }

    if (count >= 3) {
        answer.push([idx, s.length - 1]);
    }

    return answer;
};

// runtime 94th percentile
// memory 55th percentile