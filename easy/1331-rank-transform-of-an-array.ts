// Rank Transform of an Array
// from https://leetcode.com/problems/rank-transform-of-an-array/description/

// from ChatGPT
function arrayRankTransform(arr: number[]): number[] {
    // Create a sorted array of the unique elements in arr
    const sortedUnique = Array.from(new Set(arr)).sort((a, b) => a - b);

    // Create a map from element to its rank
    const rankMap: Map<number, number> = new Map();
    sortedUnique.forEach((num, index) => {
        rankMap.set(num, index + 1);
    });

    // Replace each element in the original array with its rank
    return arr.map(num => rankMap.get(num)!);
};

// runtime 78th percentile
// memory 59th percentile

// brilliant solution. This was my attempt at it, that failed because I didn't think of using a map.
// I was trying to get the index of the sorted array by using indexOf, but that's not a good idea 
// because it's O(n) time complexity each time, and to iterate through the original array makes it 
// O(n^2) (O(n) * O(n)).

function arrayRankTransformFailed(arr: number[]): number[] {
    let arrSet = new Set(arr);
    let sortedArr = [...arrSet].sort((a,b) => a - b);
    let corrRank = [];

    for (let i = 0; i < arr.length; i++) {
        let idx = sortedArr.indexOf(arr[i]);

        corrRank.push(idx + 1);
    }

    return corrRank;
};