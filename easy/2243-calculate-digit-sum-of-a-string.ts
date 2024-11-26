// Calculate Digit Sum of a String
// from https://leetcode.com/problems/calculate-digit-sum-of-a-string/description/

function sumStr(s: string): string {
    let splitStr = s.split("");
    let num = splitStr.reduce((a,b) => Number(a) + Number(b), 0);

    return String(num);
}

function digitSum(s: string, k: number): string {
    while (s.length > k) {
        let end = (k * Math.floor(s.length / k)) + (s.length % k);
        let tempK = 0;
        let strs = "";
        while (tempK < end) {
            strs += sumStr(s.slice(tempK, tempK + k));
            tempK += k;
        }
        s = strs;
    }

    return s;
};

// runtime 100th percentile
// memory 86th percentile