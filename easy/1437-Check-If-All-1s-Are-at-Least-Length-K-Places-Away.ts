// Check If All 1's Are at Least Length K Places Away
// from https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/description/

function kLengthApart(nums: number[], k: number): boolean {
    let distance = k;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (distance >= k) {
                distance = 0;
            } else return false;
        } else distance++;
    }

    return true;
};

// runtime 47th percentile
// memory 80th percentile