// Two Furthest Houses With Different Colors
// from https://leetcode.com/problems/two-furthest-houses-with-different-colors/description/

function maxDistance(colors: number[]): number {
    let max = 0;
    let left = 0;
    let right = colors.length - 1;

    while (left < right) {
        while (right > left) {
            if (colors[right] !== colors[left]) {
                if ((right - left) > max) max = right - left;
            }
            right--;
        }
        right = colors.length - 1;
        left++;
    }

    return max;
};

// runtime 100th percentile
// memory 76th percentile