// Crawler Log Folder
// https://leetcode.com/problems/crawler-log-folder/description/

function minOperations(logs: string[]): number {
    let distance = 0;
    let steps = 0;

    for (let i = 0; i < logs.length; i++) {
        switch (logs[i]) {
            case "../":
                if (distance > 0) {
                    steps--;
                    distance--;
                }
                break;
            case "./":
                break;
            default:
                distance++;
                steps++;
        }
    }

    return steps;
};

// runtime 55th percentile
// memory 96th percentile