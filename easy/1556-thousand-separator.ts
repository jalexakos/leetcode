// 1556. Thousand Separator
// https://leetcode.com/problems/thousand-separator

function thousandSeparator(n: number): string {
    let strN = String(n);
    if (strN.length <= 3) return strN;

    strN = strN.split("").reverse().join("");
    let answer = "";
    let len = 0;
    let thou = 3;
    while (len < strN.length) {
        let temp = "";
        if (thou > strN.length) thou = strN.length;
        while (len < thou) {
            temp = strN[len] + temp;
            len++;
        }
        thou += 3;
        answer= "." + temp + answer;
        temp = "";
    }

    return answer.slice(1);
};

// runtime 87th percentile
// memory 48th percentile