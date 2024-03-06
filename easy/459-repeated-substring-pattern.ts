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