// Two Sum II - Input Array Is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

// original solution
function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = 1;

    while (left < right) {
        let leftNum = numbers[left];
        let diff = target - leftNum;

        for (let i = right; i < numbers.length; i++) {
            if (numbers[i] === diff) return [left+ 1, i + 1];
        }

        right++;
        left++;
    }

    return [1,2];
};

// runtime 17th percentile
// memory 66th percentile

// after looking at another person's solution, my own attempt to recreate it
function twoSumOpt(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        if (numbers[left] + numbers[right] > target) right--;
        else if (numbers[left] + numbers[right] < target) left++;
        else return [left + 1, right + 1];
    }

    return [1,2];
};

// runtime 68th percentile
// memory 90th percentile

// This solution is so smart - it takes advantage of the fact that the array is sorted and knows 
// that if the sum is larger than the target, the right pointer needs to move left, and if the sum
// is smaller than the target, the left pointer needs to move right. This is a great example of
// how to take advantage of the properties of the input data to optimize the solution.