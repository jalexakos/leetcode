// Second Largest Digit in a String
// from https://leetcode.com/problems/second-largest-digit-in-a-string/

function secondHighest(s: string): number {
    let largest = -1;
    let secondLarge = -1;
    for (let i = 0; i < s.length; i++) {
        let num = Number(s[i]);
        if (!Number.isNaN(num)) {
            if (num > largest) {
                secondLarge = largest;
                largest = num;
            } 
            else if (num < largest && num > secondLarge) secondLarge = num;
        }
    }

    return secondLarge;
};

// runtime 55th percentile
// memory 98th percentile