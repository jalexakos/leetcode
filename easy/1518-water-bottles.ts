// Water Bottles
// from https://leetcode.com/problems/water-bottles/description/

function numWaterBottles(numBottles: number, numExchange: number): number {
    let total = numBottles;
    let remainder: number;

    while (numBottles >= numExchange) {
        remainder = numBottles % numExchange;
        numBottles = Math.floor(numBottles/numExchange);
        total += numBottles;
        numBottles += remainder;
    }

    return total;
};

// runtime 65th percentile
// memory 66th percentile