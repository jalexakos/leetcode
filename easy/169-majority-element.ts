// from https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number {
    let numMap: Record<number, number> = {};
    for (let num = 0; num < nums.length; num++){
        if (numMap[nums[num]]){
            numMap[nums[num]]++;
        } else {
            numMap[nums[num]] = 1;
        }
        if (numMap[nums[num]] > nums.length / 2) return nums[num];
    }

    return 0;
};

// runtime 40th percentile
// memory 41st percentile