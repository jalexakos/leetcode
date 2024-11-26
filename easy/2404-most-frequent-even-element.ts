// Most Frequent Even Element
// from https://leetcode.com/problems/most-frequent-even-element/description/

function mostFrequentEven(nums: number[]): number {
    let evenMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num % 2 === 0) {
            if (evenMap.has(num)) {
                evenMap.set(num, evenMap.get(num) + 1);
            } else {
                evenMap.set(num, 1);
            }
        }
    }

    let most = 0;
    let answer = -1;
    evenMap.forEach((v,k) => {
        if (v > most) {
            most = v;
            answer = k;
        } else if (v === most) {
            if (k < answer) answer = k;
        }
    });

    return answer;
};

// runtime 100th percentile
// memory 97th percentile