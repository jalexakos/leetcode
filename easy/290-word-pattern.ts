// from https://leetcode.com/problems/word-pattern/

function wordPattern(pattern: string, s: string): boolean {
    let patternArr = pattern.split('');
    let sArr = s.split(' ');

    if (patternArr.length !== sArr.length) return false;

    let hash: Record<string,string> = {};
    let set = new Set();

    for (let i = 0; i < patternArr.length; i++){
        if (!hash[patternArr[i]]) {
            if (set.has(sArr[i])) {
                return false;
            }
            hash[patternArr[i]] = sArr[i];
            set.add(sArr[i]);
        }
        else if (hash[patternArr[i]] && hash[patternArr[i]] !== sArr[i]) return false;
    }

    return true;
};

// runtime 59th percentile
// memory 24th percentile