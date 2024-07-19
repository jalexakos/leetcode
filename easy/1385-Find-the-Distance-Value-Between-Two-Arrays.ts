// Find the Distance Value Between Two Arrays
// from https://leetcode.com/problems/find-the-distance-value-between-two-arrays/

function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    let total = 0;

    for (let i = 0; i < arr1.length; i++) {
        let allTrue = true;
        let val = arr1[i];

        for (let x = 0; x < arr2.length; x++) {
            if (Math.abs(val - arr2[x]) <= d) {
                allTrue = false;
                break;
            }
        }

        if (allTrue) total++;
    }

    return total;
};

// runtime 57th percentile
// memory 100th percentile