// from https://leetcode.com/problems/relative-sort-array/description/

/*
    I added the '!' after instances of Map.get()! because TS freaks out if
    I don't. This isn't ideal, because as I understand it '!' is me telling 
    my TS linter that I know the value won't be undefined. But that's not 
    true, it's just that I'm handling the case where it is. Oh well.
*/

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    let newArr: Array<number> = [];
    let arr1Map: Map<number,number> = new Map();

    // get the count of all the numbers for arr1
    for (let i = 0; i < arr1.length; i++) {
        arr1Map.set(arr1[i], (arr1Map.get(arr1[i])! + 1 || 1));
    }

    for (let x = 0; x < arr2.length; x++) {
        while (arr1Map.get(arr2[x])! > 0) {
            newArr.push(arr2[x]);
            arr1Map.set(arr2[x], (arr1Map.get(arr2[x])! - 1));
        }

        arr1Map.delete(arr2[x]);
    }

    let remainderArr: Array<number> = [];
    arr1Map.forEach((v,k) => {
        while (v) {
            remainderArr.push(k);
            v--;
        }
    })

    remainderArr.sort((a,b) => a - b);

    for (let i = 0; i < remainderArr.length; i++) {
        newArr.push(remainderArr[i]);
    }

    return newArr;
};

// runtime 70th percentile
// memory 28th percentile