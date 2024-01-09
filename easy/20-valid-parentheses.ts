// from https://leetcode.com/problems/valid-parentheses/

type StringObject = Record<string, string>;


function isValid(s: string): boolean {
    const bracketMap: StringObject = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    let backlog = [];
    for (let char = 0; char < s.length; char++){
        if (bracketMap[s[char]]){
            backlog.push(bracketMap[s[char]]);
        } else {
            if (s[char] !== backlog[backlog.length - 1]) return false;
            backlog.pop();
        }
    }

    return backlog.length === 0;
};

// runtime 46th percentile
// memory 85th percentile

function isValidMemOp(s: string): boolean {
    const m: StringObject = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    let l = [];
    for (let c = 0; c < s.length; c++){
        if (m[s[c]]){
            l.push(m[s[c]]);
        } else {
            if (s[c] !== l[l.length - 1]) return false;
            l.pop();
        }
    }

    return l.length === 0;
};

// runtime 46th percentile
// memory 97th percentile