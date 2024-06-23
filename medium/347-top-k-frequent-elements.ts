// from https://leetcode.com/problems/top-k-frequent-elements/description/

function topKFrequent(nums: number[], k: number): number[] {
    let numMap: Map<number, number> = new Map();
    let answer: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (numMap.has(nums[i])) {
            numMap.set(nums[i], numMap.get(nums[i])! + 1);
        } else {
            numMap.set(nums[i], 1);
        }
    }

    let size = k;
    let sortedByValue = new Map([...numMap.entries()].sort((a, b) => a[1] - b[1]));

    sortedByValue.forEach((v,k) => {
        if (answer.length < size) answer.push(k);
        else {
            answer.shift();
            answer.push(k);
        }
    })

    return answer;
};

// runtime 96th percentile
// memory 86th percentile