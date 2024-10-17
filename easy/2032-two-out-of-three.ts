// Two Out of Three
// from https://leetcode.com/problems/two-out-of-three/description/

function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    let numMap = new Map();
    let answer: number[] = [];
    
    let numsSet1 = new Set(nums1);
    let numsSet2 = new Set(nums2);
    let numsSet3 = new Set(nums3);

    numsSet1.forEach((v) => {
        if (numMap.has(v)) {
            numMap.set(v, numMap.get(v) + 1);
        } else {
            numMap.set(v, 1);
        }
    })

    numsSet2.forEach((v) => {
        if (numMap.has(v)) {
            numMap.set(v, numMap.get(v) + 1);
        } else {
            numMap.set(v, 1);
        }
    })

    numsSet3.forEach((v) => {
        if (numMap.has(v)) {
            numMap.set(v, numMap.get(v) + 1);
        } else {
            numMap.set(v, 1);
        }
    })

    numMap.forEach((v,k) => {
        if (v >= 2) answer.push(k);
    })

    return answer;
};

// runtime 84th percentile
// memory 62nd percentile