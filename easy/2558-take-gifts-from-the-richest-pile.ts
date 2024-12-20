// Take Gifts From the Richest Pile
// from https://leetcode.com/problems/take-gifts-from-the-richest-pile/description/

function findLargest(arr: number[]): number {
    let largest = arr[0];
    let idx = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
            idx = i;
        }
    }

    return idx;
}

function pickGifts(gifts: number[], k: number): number {
    let count = 0;

    while (count < k) {
        let i = findLargest(gifts);
        let gift = gifts[i];
        gift = Math.floor(Math.sqrt(gift));
        gifts[i] = gift;
        count++;
    }

    return gifts.reduce((a,b) => a + b, 0);
};

// runtime 85th percentile
// memory 99th percentile