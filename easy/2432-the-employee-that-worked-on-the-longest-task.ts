// The Employee That Worked on the Longest Task
// from https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/description/

function hardestWorker(n: number, logs: number[][]): number {
    let longest = 0;
    let last = 0;
    let employees: number[] = [];

    for (let i = 0; i < logs.length; i++) {
        let log = logs[i];
        if (log[1] - last > longest) {
            employees = [log[0]];
            longest = log[1] - last;
        } else if (log[1] - last === longest) {
            employees.push(log[0]);
        }

        last = log[1];
    }

    return employees.sort((a,b) => a - b)[0];
};

// runtime 100th percentile
// memory 78th percentile