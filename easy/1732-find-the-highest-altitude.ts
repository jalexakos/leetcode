// Find the Highest Altitude
// from https://leetcode.com/problems/find-the-highest-altitude/description/

function largestAltitude(gain: number[]): number {
    let peak = 0;
    let temp = 0;
    for (let i = 0; i < gain.length; i++) {
        temp += gain[i];
        if (temp > peak) peak = temp;
    }

    return peak;
};

// runtime 61st percentile
// memory 96th percentile