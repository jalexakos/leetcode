// Number of Different Integers in a String
// from https://leetcode.com/problems/number-of-different-integers-in-a-string/description/

function stripNonDigits(s:string): string {
    return s.replace(/\D/g, ' ');
}

function stripLeadZeroes(s:string): string {
    let slicePoint = 0;
    if (s[0] === "0") {
        let i = 0;
        while (s[i] === "0") {
            slicePoint++;
            i++;
        }
    }
    
    return s.slice(slicePoint);
}

function numDifferentIntegers(word: string): number {
    let spaces = stripNonDigits(word);
    let arrDigs: Array<string> = spaces.split(" ");

    arrDigs = arrDigs.filter((word) => {
        return word !== "";
    });

    arrDigs = arrDigs.map((num) => {
        return stripLeadZeroes(num);
    })

    let digSet = new Set(arrDigs);

    return digSet.size;
};

// runtime 66th percentile
// memory 23rd percentile