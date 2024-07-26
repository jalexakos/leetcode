// Number of Students Doing Homework at a Given Time
// from https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/description/

function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
    let studentCount = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && queryTime <= endTime[i]) studentCount++;
    }

    return studentCount;
};

// runtime 76th percentile
// memory 53rd percentile