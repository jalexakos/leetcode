// from https://leetcode.com/problems/buddy-strings/description/

// ChatGPT's solution
function buddyStrings(s: string, goal: string): boolean {
    if (s.length !== goal.length) return false;

    const diffIndices: number[] = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diffIndices.push(i);
        }
    }

    if (diffIndices.length === 2) {
        const [i, j] = diffIndices;
        return s[i] === goal[j] && s[j] === goal[i];
    } else if (diffIndices.length === 0) {
        const charSet = new Set(s);
        return charSet.size < s.length;
    }

    return false;
};

// runtime 69th percentile
// memory 10th percentile