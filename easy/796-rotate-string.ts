// from https://leetcode.com/problems/rotate-string/description/

function rotateString(s: string, goal: string): boolean {
    let testStr = s;
    for (let i = 0; i < s.length; i++){
        testStr = testStr.slice(1,testStr.length) + testStr.slice(0,1);
        if (testStr === goal) return true;
    }
    return false;
};

// runtime 82nd percentile
// memory 24th percentile