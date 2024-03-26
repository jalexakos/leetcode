// from https://leetcode.com/problems/license-key-formatting/

// started with this method, then made a realization. Keeping this for my own records.
function licenseKeyFormattingAttempt(s: string, k: number): string {
    let splitS = s.split('-');
    let answer = '';

    let carryChar = '';
    for (let i = splitS.length - 1; i > -1; i--){
        if (carryChar){
           // need to implement how to handle this 
        } else {
            if (splitS[i].length > k) {
                answer += splitS[i].slice(splitS[i].length - k,splitS[i].length)
                carryChar = splitS[i].slice(0,splitS[i].length - k);
            } else if (splitS[i].length < k) {
                // handle this
            } else {
                answer = '-' + splitS[i] + answer;
            }
        }
    }

    return answer;
};

// my attempt with the new insight
function licenseKeyFormatting(s: string, k: number): string {
    let combinedStr = s.split('-').join('').toUpperCase();
    let startPoint = combinedStr.length % k;
    let answer = '';

    if (startPoint > 0) {
        answer += combinedStr.slice(0,startPoint) + '-';
    }

    while (startPoint < combinedStr.length) {
        answer += combinedStr.slice(startPoint, (startPoint + k)) + '-';
        startPoint += k;
    }

    return answer.slice(0, (answer.length - 1));
};

// runtime 66th percentile
// memory 96th percentile