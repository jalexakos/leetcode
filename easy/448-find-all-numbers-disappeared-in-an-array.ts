// from https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

function findDisappearedNumbers(nums: number[]): number[] {
    let orderedArr = [];
    let answer: number[] = [];
    for (let i = 1; i <= nums.length; i++) {
        orderedArr.push(i);
    }

    orderedArr.forEach(arrNum => {
        if (!nums.find(num => num === arrNum)) answer.push(arrNum);
    })

    return answer;
};

// runtime 5th percentile
// memory 9th percentile