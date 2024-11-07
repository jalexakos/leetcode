// Minimum Bit Flips to Convert Number
// from https://leetcode.com/problems/minimum-bit-flips-to-convert-number/description/

function addZeros(firstBit: string, secondBitLen: number): string {
    while (firstBit.length < secondBitLen) {
        firstBit = "0" + firstBit;
    }

    return firstBit;
}

function minBitFlips(start: number, goal: number): number {
    if (start === goal) return 0;
    let startBit = start.toString(2);
    let goalBit = goal.toString(2);

    if (startBit.length !== goalBit.length) {
        if (startBit.length < goalBit.length) startBit = addZeros(startBit, goalBit.length);
        else goalBit = addZeros(goalBit, startBit.length);
    }

    let count = 0;
    for (let i = 0; i < startBit.length; i++) {
        if (startBit[i] !== goalBit[i]) count++;
    }

    return count;
};

// runtime 100th percentile
// memory 20th percentile