// from: https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
    let stringArray = s.trim().split(' ');

    return stringArray[stringArray.length - 1].length;
};
// runtime 77th percentile
// memory 26th percentile