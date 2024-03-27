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

function checkPerfectNumberOpt(num: number): boolean {
    let posDivis = 0;
    let halfNum = Math.floor(num / 2);
    for (let i = 1; i <= halfNum; i++){
        if (num % i === 0) {
            posDivis += i;
        }
    }

    return posDivis === num;
};

// runtime 55th percentile
// memory 55th percentile