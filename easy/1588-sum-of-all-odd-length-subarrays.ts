// Sum of All Odd Length Subarrays
// from https://leetcode.com/problems/sum-of-all-odd-length-subarrays/description/

function sumOddLengthSubarrays(arr: number[]): number {
    let sum = 0;
    let oddLen = 1;
    while (oddLen <= arr.length) {
        for (let i = 0; i + oddLen <= arr.length; i++) {
            sum += arr.slice(i, i + oddLen).reduce((a,b) => a + b);
        }
        oddLen += 2;
    }

    return sum;
};

// runtime 70th percentile
// memory 11th percentile