// Longer Contiguous Segments of Ones than Zeros
// from https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/description/

function checkZeroOnes(s: string): boolean {
    let longestOne = 0;
    let longestZero = 0;
    let count = 0;
    let last = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0") {
            if (last === "0") {
                count++;
            } else {
                if (count > longestOne) longestOne = count;
                last = "0";
                count = 1;
            }
        } else {
            if (last === "1") {
                count++;
            } else {
                if (count > longestZero) longestZero = count;
                last = "1";
                count = 1;
            }
        }
    }

    if (last === "1") {
        if (count > longestOne) longestOne = count;
    } else {
        if (count > longestZero) longestZero = count;
    }

    return longestOne > longestZero;
};

// runtime 60th percentile
// memory 89th percentile