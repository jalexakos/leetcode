// Form Smallest Number From Two Digit Arrays
// from https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/description/

function findMin(numArr: number[]): number {
    let small = 10;
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] < small) small = numArr[i];
    }

    return small;
}

function minNumber(nums1: number[], nums2: number[]): number {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let combined: number = 10;

    set1.forEach(v => {
        if (set2.has(v)) {
            if (v < combined) combined = v;
        }
    });
    if (combined < 10) return combined;

    let min1 = findMin(nums1);
    let min2 = findMin(nums2);

    if (min1 < min2) return Number(String(min1) + String(min2));
    return Number(String(min2) + String(min1));
};

// runtime 100th percentile
// memory 85th percentile