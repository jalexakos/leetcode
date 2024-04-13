// from https://leetcode.com/problems/degree-of-an-array/description/

function findShortestSubArray(nums: number[]): number {
    let map: Record<string | number, number[]> = {};

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]].push(i);
        } else {
            map[nums[i]] = [i];
        }
    }

    let longestLength = 0;
    let smallestGap = nums.length + 1;

    for (const num of Object.keys(map)) {
        if (map[num].length > longestLength) {
            smallestGap = (map[num][map[num].length - 1] - map[num][0]) + 1;
            longestLength = map[num].length;
        } else if (map[num].length === longestLength) {
            if (((map[num][map[num].length - 1] - map[num][0]) + 1) < smallestGap) {
                smallestGap = (map[num][map[num].length - 1] - map[num][0]) + 1;
            }
        }
    }

    return smallestGap;
};

// runtime 81st percentile
// memory 57th percentile