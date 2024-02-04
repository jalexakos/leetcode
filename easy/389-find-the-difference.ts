// from https://leetcode.com/problems/find-the-difference/

function findTheDifference(s: string, t: string): string {
    let sArr = s.split('');
    let tArr = t.split('');

    for (let i = 0; i < sArr.length; i++){
        tArr.splice(tArr.indexOf(sArr[i]), 1);
    }

    return tArr[0];
};

// runtime 40th percentile
// memory 25th percentile