// from https://leetcode.com/problems/perfect-number/description/

function checkPerfectNumber(num: number): boolean {
    let posDivis = 0;
    for (let i = 1; i < num; i++){
        if (num % i === 0) {
            posDivis += i;
        }
    }

    return posDivis === num;
};

// runtime 5th percentile
// memory 83rd percentile