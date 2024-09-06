// Minimum Changes To Make Alternating Binary String
// from https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/description/

// failed attempt
function minOperationsFailed(s: string): number {
    let count = 0;
    let newStr = "";
    let otherStr = "";
    let zero = false;
    if (s.length % 2 !== 0) {
        let mapS: Map<string,number> = new Map();
        for (let i = 0; i < s.length; i++) {
            if (mapS.has(s[i])) mapS.set(s[i], mapS.get(s[i])! + 1);
            else mapS.set(s[i], 1);
        }
        let largest = 0;
        let char = "";
        mapS.forEach((v,k) => {
            if (v > largest) {
              largest = v;
              char = k;  
            }
        })

        zero = char === "0" ? true : false;
    } else {
        if (s[0] === "0") zero = false;
        while (otherStr.length < s.length) {
            otherStr += zero ? "0" : "1";
            zero = !zero;
        }

        zero = true;
    }
    
    while (newStr.length < s.length) {
        newStr += zero ? "0" : "1";
        zero = !zero;
    }

    if (otherStr.length > 0) {
        let tempCount = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== otherStr[i]) tempCount++;
        }
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== newStr[i]) count++;
        }
        if (tempCount < count) count = tempCount;
    } else {
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== newStr[i]) count++;
        }
    }

    return count;
};

// doesn't account for this case: "01011"

// my solution that worked, after I asked ChatGPT for help
function minOperations(s: string): number {
    if (s.length === 1) return 0;
    if (s.length === 2) {
        if (s.includes("0") && s.includes("1")) return 0;
        return 1;
    }

    let count0 = 0;
    let count1 = 0;

    let zeroStr = "";
    let oneStr = "";
    let zero = true;
    for (let i = 0; i < s.length; i++) {
        zeroStr += zero ? "0" : "1";
        zero = !zero;
    }

    zero = false;
    for (let i = 0; i < s.length; i++) {
        oneStr += zero ? "0" : "1";
        zero = !zero;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === zeroStr[i]) {
            count1++;
        } else {
            count0++;
        }
    }

    return Math.min(count1, count0);
};

// runtime 60th percentile
// memory 6th percentile

// from ChatGPT
function minOperationsOpt(s: string): number {
    let countPattern1 = 0;
    let countPattern2 = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== (i % 2 === 0 ? '0' : '1')) {
            countPattern1++;
        }
        if (s[i] !== (i % 2 === 0 ? '1' : '0')) {
            countPattern2++;
        }
    }

    return Math.min(countPattern1, countPattern2);
}

// runtime 87th percentile
// memory 77th percentile