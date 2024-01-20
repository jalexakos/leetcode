// from https://leetcode.com/problemset/?difficulty=EASY&page=2#:~:text=Easy-,258.%20Add%20Digits,-66.2%25

function addDigits(num: number): number {
    if (num < 10) return num;
    let numString = String(num);
    while (numString.length > 1){
        let newNum = 0;
        for (let dig = 0; dig < numString.length; dig++){
            newNum += Number(numString[dig]);
        }
        numString = String(newNum);
    }

    return Number(numString);
};


// runtime 9th percentile
// memory 7th percentile