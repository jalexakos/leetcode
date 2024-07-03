// Convert Integer to the Sum of Two No-Zero Integers
// https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/description/

function getNoZeroIntegers(n: number): number[] {
    let opp = 1;
    let tempN = n - 1;
    let strN = String(tempN);
    let strOpp = String(opp);
    while (strN.includes('0') || strOpp.includes('0')) {
        tempN--;
        opp++;
        strN = String(tempN);
        strOpp = String(opp);
    }

    return [opp, tempN];
};

// runtime 11th percentile
// memory 100th percentile