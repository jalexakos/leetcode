// from https://leetcode.com/problems/backspace-string-compare/

function backspaceCompare(s: string, t: string): boolean {
    let sArr = [];
    let tArr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") {
            sArr.splice(sArr.length - 1, 1);
        } else {
            sArr.push(s[i]);
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] === "#") {
            tArr.splice(tArr.length - 1, 1);
        } else {
            tArr.push(t[i]);
        }
    }

    if (sArr.length !== tArr.length) return false;

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== tArr[i]) return false;
    }

    return true;
};

// runtime 38th percentile
// memory 8th percentile

// using Array.prototype.pop() improves the runtime significantly

function backspaceComparePop(s: string, t: string): boolean {
    let sArr = [];
    let tArr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") {
            sArr.pop();
        } else {
            sArr.push(s[i]);
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] === "#") {
            tArr.pop();
        } else {
            tArr.push(t[i]);
        }
    }

    if (sArr.length !== tArr.length) return false;

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== tArr[i]) return false;
    }

    return true;
};

// runtime 98th percentile
// memory 19th percentile