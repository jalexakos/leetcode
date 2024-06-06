// from https://leetcode.com/problems/binary-number-with-alternating-bits/description/

// H/T to this SO answer for the dec2bin function: https://stackoverflow.com/a/9939760/6146580
function dec2bin(dec: number): string {
    return (dec >>> 0).toString(2);
  }
  
function hasAlternatingBits(n: number): boolean {
    let strBinary = dec2bin(n);
    let x = strBinary[0];

    for (let i = 1; i < strBinary.length; i++) {
        if (strBinary[i] === x) return false;
        x = strBinary[i];
    }

    return true;
};

// runtime: 100th percentile
// memory: 80th percentile