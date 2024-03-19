// from https://leetcode.com/problems/max-consecutive-ones/description/

function findMaxConsecutiveOnes(nums: number[]): number {
    let consec = 0;
    let tracker = 0;
    for (let num in nums) {
        if (nums[num] === 1) {
            tracker++;
        } else {
            if (tracker > consec) {
                consec = tracker;
            }
            tracker = 0;
        }
    }

    if (tracker > consec) {
        consec = tracker;
    }

    return consec;
};

// runtime 20th percentile
// memory 25th percentile