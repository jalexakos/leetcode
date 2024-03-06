// from https://leetcode.com/problems/repeated-substring-pattern/description/

function repeatedSubstringPattern(s: string): boolean {
    if (s.length === 1) return false;
    for (let i = 1; i < s.length; i++) {
        if ((s.length % i) === 0) {
            let subStr = s.slice(0,i);
            let testStr = '';
            let x = 0;
            while (x < (s.length / i)) {
                testStr += subStr;
                x++;
            }
            if (testStr === s) return true;
        }
    }

    return false;
};

// runtime 37th percentile
// memory 37th percentile

// I thought about this more, and thought I could optimize it 
// for memory (and maybe runtime). I was surprised with runtime 
// improvements, though memory did not improve much.
function repeatedSubstringPatternOpt(s: string): boolean {
    if (s.length === 1) return false;
    const sLength = s.length;
    for (let i = 1; i < (sLength / 2) + 1; i++) {
        ifCheck: if ((sLength % i) === 0) {
            let subStr = s.slice(0,i);
            let subLength = subStr.length;
            let start = subLength;
            let end = subLength * 2;
            while (end <= sLength) {
                if (subStr !== s.slice(start, end)){
                    break ifCheck;
                }
                start += subLength;
                end += subLength;
            }
            return true;
        }
    }

    return false;
};

// runtime 96th percentile
// memory 46th percentile