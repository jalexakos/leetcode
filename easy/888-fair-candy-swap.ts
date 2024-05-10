// from https://leetcode.com/problems/fair-candy-swap/description/

function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
    const aSum = aliceSizes.reduce((a,b) => a + b, 0);
    const bSum = bobSizes.reduce((a,b) => a + b, 0);

    let diff = bSum - aSum;
    let bobGreater = 1;
    if (aSum > bSum) {
        diff = aSum - bSum;
        bobGreater = -1;
    }

    for (let i = 0; i < aliceSizes.length; i++) {
        for (let j = 0; j < bobSizes.length; j++) {
            if (bobSizes[j] - aliceSizes[i] === (diff/2) * bobGreater) {
                return [aliceSizes[i], bobSizes[j]];
            }
        }
    }

    return [0,0]
};

// runtime 19th percentile
// memory 90th percentile