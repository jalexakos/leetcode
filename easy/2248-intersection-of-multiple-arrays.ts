// Intersection of Multiple Arrays
// from https://leetcode.com/problems/intersection-of-multiple-arrays/description/

function intersection(nums: number[][]): number[] {
    let numMap: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            let num = nums[i][j];
            if (numMap.has(num)) numMap.set(num, numMap.get(num)! + 1);
            else numMap.set(num, 1);
        }
    }

    let answer: number[] = [];
    numMap.forEach((v,k) => {
        if (v === nums.length) answer.push(k);
    })

    return answer.sort((a,b) => a - b);
};

// runtime 69th percentile
// memory 98th percentile