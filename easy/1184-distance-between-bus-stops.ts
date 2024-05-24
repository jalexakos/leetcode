// from https://leetcode.com/problems/distance-between-bus-stops/description/

function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
    let startPoint: number;
    let endPoint: number;
    if (start > destination) {
        startPoint = destination;
        endPoint = start;
    } else {
        startPoint = start;
        endPoint = destination;
    }

    let clockwise = distance.slice(startPoint, endPoint).reduce((a,b) => a + b, 0);
    let counterClockwise = distance.slice(endPoint).reduce((a,b) => a + b, 0) + distance.slice(0,startPoint).reduce((a,b) => a + b, 0);

    return clockwise < counterClockwise ? clockwise : counterClockwise;
};

// runtime 67th percentile
// memory 72nd percentile