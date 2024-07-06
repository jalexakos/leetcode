// Number of Steps to Reduce a Number to Zero
// from https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/

function numberOfSteps(num: number): number {
    let copyNum = num;
    let steps = 0;

    while (copyNum > 0) {
        if (copyNum % 2 === 0) copyNum /= 2;
        else copyNum--;
        steps++;
    }

    return steps;
};

// runtime 45th percentile
// memory 8th percentile