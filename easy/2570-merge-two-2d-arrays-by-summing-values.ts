// Merge Two 2D Arrays by Summing Values
// from https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/description/

function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    let numMap: Map<number,number> = new Map();

    for (let i = 0; i < nums1.length; i++) {
        if (numMap.has(nums1[i][0])) {
            numMap.set(nums1[i][0], numMap.get(nums1[i][0])! + nums1[i][1]);
        } else {
            numMap.set(nums1[i][0], nums1[i][1]);
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (numMap.has(nums2[i][0])) {
            numMap.set(nums2[i][0], numMap.get(nums2[i][0])! + nums2[i][1]);
        } else {
            numMap.set(nums2[i][0], nums2[i][1]);
        }
    }

    let answer: number[][] = [];

    numMap.forEach((v,k) => answer.push([k,v]));

    return answer.sort((a,b) => a[0] - b[0]);
};

// runtime 82nd percentile
// memory 58th percentile