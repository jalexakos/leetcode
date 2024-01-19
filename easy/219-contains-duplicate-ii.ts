// from https://leetcode.com/problems/contains-duplicate-ii/

// first solution - time limit exceeded due to O(n)^2 runtime
function containsNearbyDuplicateBrute(nums: number[], k: number): boolean {
    for (let x = 0; x < nums.length; x++){
        for (let y = x + 1; y < nums.length; y++){
            if (nums[x] === nums[y] && Math.abs(x - y) <= k){
                return true;
            }
        }
    }

    return false;
};

// working solution

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let hash: Record<number| string, Array<number>> = {};

    for (let i = 0; i < nums.length; i++){
        if (hash[nums[i]]){
            hash[nums[i]].push(i);
        } else {
            hash[nums[i]] = [i];
        }
    }

    for (const num of Object.keys(hash)){
        if (hash[num].length > 1){
            for (let x = 0; x < (hash[num].length - 1); x++)
            if (Math.abs(hash[num][x] - hash[num][x + 1]) <= k){
                return true;
            }
        }
    }

    return false;
};

// runtime 15th percentile
// memory 5th percentile