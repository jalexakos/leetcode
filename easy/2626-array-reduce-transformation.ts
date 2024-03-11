// from https://leetcode.com/problems/array-reduce-transformation/description/

type FnReduce = (accum: number, curr: number) => number

function reduce(nums: number[], fn: FnReduce, init: number): number {
    if (nums.length === 0) return init;
    let val = init;
    for (let i = 0; i < nums.length; i++){
        val = fn(val, nums[i]);
    }

    return val;
};

// runtime 96th percentile
// memory 60th percentile