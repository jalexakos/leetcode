// Maximum Units on a Truck
// from https://leetcode.com/problems/maximum-units-on-a-truck/description/

function maximumUnits(boxTypes: number[][], truckSize: number): number {
    let boxesDesc = [...boxTypes].sort((a,b) => b[1] - a[1]);
    let truckSizeCopy = truckSize;
    let count = 0;
    let i = 0;
    while (truckSizeCopy > 0 && i < boxTypes.length) {
        while (boxesDesc[i][0] > 0) {
            count += boxesDesc[i][1];
            truckSizeCopy--;
            boxesDesc[i][0]--;
            if (truckSizeCopy === 0) break;
        }
        i++;
    }
    return count;
};

// runtime 15th percentile
// memory 85th percentile