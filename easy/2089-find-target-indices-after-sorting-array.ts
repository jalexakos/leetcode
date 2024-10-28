// Find Target Indices After Sorting Array
// from https://leetcode.com/problems/find-target-indices-after-sorting-array/description/

function targetIndices(nums: number[], target: number): number[] {
    let sortedNums = [...nums].sort((a,b) => a - b);
    let answer: number[] = [];

    let left = 0;
    let right = sortedNums.length - 1;
    let mid = Math.floor((right + left)/2);

    while (left <= right) {
        if (sortedNums[mid] === target) {
            answer.push(mid);
            let sideL = mid - 1;
            let sideR = mid + 1;
            while (sortedNums[sideL] === target) {
                answer.push(sideL);
                sideL--;
            }

            while (sortedNums[sideR] === target) {
                answer.push(sideR);
                sideR++;
            }
            break;
        } else if (sortedNums[mid] < target) {
            left = mid + 1;
            mid = Math.floor((right + left)/2);
        } else {
            right = mid - 1;
            mid = Math.floor((right + left)/2);
        }
    }

    return answer.sort((a,b) => a - b);;
};

// runtime 75th percentile
// memory 85th percentile