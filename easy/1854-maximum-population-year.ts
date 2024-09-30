// Maximum Population Year
// from https://leetcode.com/problems/maximum-population-year/description/

function maximumPopulation(logs: number[][]): number {
    let max = 0;
    let year = 0;
    let yearMap: Map<number,number> = new Map();
    for (let i = 0; i < logs.length; i++) {
        for (let j = logs[i][0]; j < logs[i][1]; j++) {
            if (yearMap.has(j)) {
                yearMap.set(j, yearMap.get(j)! + 1);
            } else {
                yearMap.set(j, 1);
            }
        }
    }

    yearMap.forEach((v,k) => {
        if (v > max) {
            max = v;
            year = k;
        } if (v === max && k < year) {
            year = k;
        }
    })

    return year;
};

// runtime 19th percentile
// memory 47th percentile