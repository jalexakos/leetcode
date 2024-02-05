// from https://leetcode.com/problems/intersection-of-two-arrays/

function intersection(nums1: number[], nums2: number[]): number[] {
    let answer: number[] = [];
    let setOne = new Set();
    let setTwo = new Set();
    
    for (let i = 0; i < nums1.length; i++) {
        setOne.add(nums1[i]);
    }

    for (let x = 0; x < nums2.length; x++) {
        if (setOne.has(nums2[x])){
            setTwo.add(nums2[x]);
        }
    }

    setTwo.forEach(v => answer.push(Number(v)));

    return answer;
}

// runtime 50th percentile
// memory 9th percentile