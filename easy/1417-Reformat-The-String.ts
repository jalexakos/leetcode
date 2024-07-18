// Reformat The String
// from https://leetcode.com/problems/reformat-the-string/description/

function reformat(s: string): string {
    let strMap: Map<string,number> = new Map();
    let strCount = 0;
    let numMap: Map<string,number> = new Map();
    let numCount = 0;
    let answer = "";

    for (let i = 0; i < s.length; i++) {
        if (Number.isNaN(Number(s[i]))) {
            if (strMap.has(s[i])) strMap.set(s[i], strMap.get(s[i])! + 1);
            else strMap.set(s[i], 1);
            strCount++;
        } else {
            if (numMap.has(s[i])) numMap.set(s[i], numMap.get(s[i])! + 1);
            else numMap.set(s[i], 1);
            numCount++;
        }
    }

    if (strCount > numCount) {
        if (strCount > numCount + 1) return answer;
    } else if (strCount < numCount) {
        if (strCount + 1 < numCount) return answer;
    }

    let arrStr = [...strMap];
    let arrNum = [...numMap];

    let isStr = true;

    if (numCount > strCount) isStr = false;

    let totalCount = numCount + strCount;

    while (totalCount > 0) {
        if (isStr) {
            for (let i = 0; i < arrStr.length; i++) {
                if (arrStr[i][1] > 0) {
                    let count = arrStr[i][1];
                    answer += arrStr[i][0];
                    count--;
                    arrStr[i][1] = count;
                    break;
                } else {
                    continue;
                }
            }
        } else {
            for (let i = 0; i < arrNum.length; i++) {
                if (arrNum[i][1] > 0) {
                    let count = arrNum[i][1];
                    answer += arrNum[i][0];
                    count--;
                    arrNum[i][1] = count;
                    break;
                } else {
                    continue;
                }
            }
        }
        isStr = !isStr;
        totalCount--;
    }

    return answer;
};

// runtime 75th percentile
// memory 62nd percentile