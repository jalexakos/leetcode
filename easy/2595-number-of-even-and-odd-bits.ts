// Number of Even and Odd Bits
// from https://leetcode.com/problems/number-of-even-and-odd-bits/description/

function evenOddBit(n: number): number[] {
    let bits = n.toString(2).split("").reverse().join("");
    let even = 0;
    let odd = 0;
    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === "1") {
            if (i % 2 === 0) even++;
            else odd++;
        }
        
    }
    return [even, odd];
};

// runtime 46th percentile
// memory 61st percentile