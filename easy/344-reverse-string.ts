// from https://leetcode.com/problems/reverse-string/

/**
 Do not return anything, modify s in-place instead.
 */
 function reverseString(s: string[]): void {
    let y = s.length - 1;
    for (let x = 0; x < Math.floor(s.length / 2); x++){
        let temp = s[x];
        s[x] = s[y];
        s[y] = temp;
        y--;
    }
};

// runtime 98th percentile
// memory 5th percentile