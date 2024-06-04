// from https://leetcode.com/problems/count-binary-substrings/description/

// my attempt (time limit exceeded)
function countBinarySubstringsFailed(s: string): number {
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        let zeroCount = 0;
        let oneCount = 0;
        if (s[i] === '0') zeroCount++;
        else oneCount++;
        for (let x = i + 1; x < s.length; x++) {
            if (s[x] === s[i]) {
                if (zeroCount) zeroCount++;
                else oneCount++;
            } else {
                if (zeroCount) {
                    let subStr = s.slice(x, x + zeroCount);
                    if (subStr.includes('0') || subStr.length < (x - i)) break;
                    answer++;
                    break;
                } else {
                    let subStr = s.slice(x, x + oneCount);
                    if (subStr.includes('1') || subStr.length < (x - i)) break;
                    answer++;
                    break;
                }
            }
        }
    }

    return answer;
};

// second attempt (time limit exceeded)
function countBinarySubstringsFailedTwo(s: string): number {
    let answer = 0;
    let left = 0;

    while (left < s.length) {
        let count = 1;
        let right = left + 1;
        while (s[right] === s[left]) {
            count++;
            right++;
        }

        let rightSubStr = s.slice(right, right + count);
        let leftSubStr = s.slice(left, right);
        if (leftSubStr.length !== rightSubStr.length || rightSubStr.includes(leftSubStr[0])) {
            left++;
            continue;
        } 
        answer++;
        left++;
        continue;
    }

    return answer;
};

// GitHub Copilot's solution
function countBinarySubstrings(s: string): number {
    let answer = 0;
    let prev = 0;
    let curr = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) curr++;
        else {
            answer += Math.min(prev, curr);
            prev = curr;
            curr = 1;
        }
    }

    return answer + Math.min(prev, curr);
};

// runtime 30th percentile
// memory 100th percentile