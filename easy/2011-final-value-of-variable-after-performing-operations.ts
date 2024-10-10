// Final Value of Variable After Performing Operations
// from https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

function finalValueAfterOperations(operations: string[]): number {
    let answer = 0;
    for (const operation of operations) {
        if (operation.includes("-")) answer--;
        else answer++;
    }

    return answer;
};

// runtime 49th percentile
// memory 48th percentile