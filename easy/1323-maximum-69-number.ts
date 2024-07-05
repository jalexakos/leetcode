// Maximum 69 Number
// https://leetcode.com/problems/maximum-69-number/description/

function maximum69Number (num: number): number {
    let arrNum = String(num).split('');
    let switched = true; 

    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] === '6' && switched) {
            arrNum[i] = '9';
            switched = !switched;
        }
    }

    return Number(arrNum.join(''));
};

// runtime 96th percentile
// memory 16th percentile