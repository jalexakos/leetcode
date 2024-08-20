// Reformat Phone Number
// https://leetcode.com/problems/reformat-phone-number/description/

function reformatNumber(number: string): string {
    let copyNum = number;
    copyNum = copyNum.replaceAll(" ", "");
    copyNum = copyNum.replaceAll("-", "");

    let i = 0;
    let answer = "";
    while (copyNum.length > 4) {
        let portion = copyNum.slice(i, i + 3);
        answer += portion + "-";
        copyNum = copyNum.slice(i + 3);
    }

    if (copyNum.length === 4) {
        answer += copyNum.slice(0,2) + "-" + copyNum.slice(2);
    } else {
        answer += copyNum;
    }

    return answer;
};

// runtime 57th percentile
// memory 28th percentile