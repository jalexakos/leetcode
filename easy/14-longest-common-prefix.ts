// from https://leetcode.com/problems/longest-common-prefix/

// input: array of strings
// output: string

function longestCommonPrefix(strs: string[]): string {
    let prefix = '';

    let shortestStringLength = 201;
    // find shortest string
    for (let x = 0; x < strs.length; x++){
        if (strs[x].length < shortestStringLength) shortestStringLength = strs[x].length;
    }

    // go through only as long as the shortest string
    for (let y = 0; y < shortestStringLength; y++){
        // create temporary prefix to test
        let tempPrefix = prefix + strs[0][y];

        // check every other string in the array's prefix of the same length to confirm
        // they're the same
        let checkArray = strs.every(str => (prefix + str[y]) === tempPrefix);
        if (!checkArray) break;
        prefix = tempPrefix;
    }

    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""

// runtime 40th percentile
// memory 7th percentile