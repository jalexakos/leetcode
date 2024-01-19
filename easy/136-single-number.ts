// from https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
    let hash: Record<number,number> = {};
    // for (let i = 0; i < nums.length; i++){

    // }
    nums.forEach(num => {
        if (hash[num]){
            hash[num]++;
        } else {
            hash[num] = 1;
        }
    });

    const keys = Object.keys(hash);
    for (const num of keys) {
        if (hash[Number(num)] === 1) {
            return Number(num);
        }
    }

    return 0;
};

// runtime 36th percentile
// memory 21st percentile

// My solution does not abide by the constraints of the description, which require:
// O(n) runtime
// O(1) memory
// I could not figure out a solution that abides by these restraints. I will have to research how to do that.

// UPDATE: I used ChatGPT to find a solution that abided the constraints. It was much more niche than I expected.
// See below.

function singleNumberOpt(nums: number[]): number {
    let result = 0;
 
     for (let num of nums) {
         // XOR operation
         result ^= num;
     }
 
     return result;
 };

// runtime 85th percentile
// memory 61st percentile

// This solution leverages the XOR operator, one I was not familiar with. I don't fully understand it,
// but I will try to read it on it more.
// MDN Dos here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR