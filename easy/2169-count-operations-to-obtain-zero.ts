// Count Operations to Obtain Zero
// from https://leetcode.com/problems/count-operations-to-obtain-zero/description/

function countOperations(num1: number, num2: number): number {
    let numOne = num1;
    let numTwo = num2;

    let steps = 0;

    while (numOne > 0 && numTwo > 0) {
        if (numOne >= numTwo) {
            numOne -= numTwo;
        } else {
            numTwo -= numOne;
        }
        steps++;
    }

    return steps;
};

// runtime 33rd percentile
// memory 21st percentile