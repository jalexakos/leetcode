// from https://leetcode.com/problems/number-of-segments-in-a-string/description/

function countSegments(s: string): number {
    let splitS = s.split('');
    let answer = 0;
    let temp = 0;
    for (let i = 0; i < splitS.length; i++) {
        if (splitS[i] === ' ') {
            if (temp > 0) {
                answer++;
            }
            temp = 0;
        } else {
            temp++;
        }
    }

    if (temp > 0) answer++;

    return answer;
};

// runtime 50th percentile
// memory 6th percentile