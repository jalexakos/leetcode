// from https://leetcode.com/problems/distribute-candies/description/

function distributeCandies(candyType: number[]): number {
    let candySet = new Set();
    for (let i = 0; i < candyType.length; i++) {
        candySet.add(candyType[i]);
    }

    if (candySet.size > (candyType.length / 2)) {
        return candyType.length / 2;
    }

    return candySet.size;
};

// runtime 73rd percentile
// memory 5th percentile