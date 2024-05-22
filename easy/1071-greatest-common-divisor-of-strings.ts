// from https://leetcode.com/problems/greatest-common-divisor-of-strings/description/

function gcdOfStrings(str1: string, str2: string): string {
    let divisor = "";
    let shorterStr = str1.length > str2.length ? str1 : str2;

    for (let i = 1; i <= shorterStr.length; i++) {
        if (str1.slice(0,i) !== str2.slice(0,i)) {
            break;
        } else {
            let temp = str1.slice(0,i);
            
            if (str1.length % temp.length === 0 && str2.length % temp.length === 0) {
                let str1Multiplier = str1.length / temp.length;
                let str2Multiplier = str2.length / temp.length;
                let combinedTemp = "";
                while (str1Multiplier) {
                    combinedTemp += temp;
                    str1Multiplier--;
                }
                if (combinedTemp === str1) {
                    combinedTemp = "";
                    while (str2Multiplier) {
                        combinedTemp += temp;
                        str2Multiplier--;
                    }

                    if (combinedTemp === str2) {
                        divisor = temp;
                    }
                }
            }
        }
    }

    return divisor;
};

// runtime 76th percentile
// memory 18th percentile