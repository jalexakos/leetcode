// from https://leetcode.com/problems/number-complement/description/

function findComplement(num: number): number {
    let x = num.toString(2);
    let answer = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] === '0') answer += '1';
        else answer += '0';
    }
    return parseInt(answer, 2);
};

// runtime 32nd percentile
// memory 80th percentile