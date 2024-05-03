// from https://leetcode.com/problems/faulty-keyboard/description/

function finalString(s: string): string {
    let finalStr = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'i') {
            finalStr = finalStr.split('').reverse().join('');
        } else {
            finalStr += s[i];
        }
    }

    return finalStr;
};

// runtime 45th percentile
// memory 36th percentile

function finalStringPerf(s: string): string {
    let finalStr: Array<string> = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'i') {
            finalStr = finalStr.reverse();
        } else {
            finalStr.push(s[i]);
        }
    }

    return finalStr.join('');
};

// runtime 65th percentile
// memory 94th percentile