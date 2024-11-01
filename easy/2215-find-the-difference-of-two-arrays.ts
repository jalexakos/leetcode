// Find the Difference of Two Arrays
// from https://leetcode.com/problems/find-the-difference-of-two-arrays/description/

// solution 1
function findDifference1(nums1: number[], nums2: number[]): number[][] {
    let list1: Set<number> = new Set();
    let list2: Set<number> = new Set();
    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i])) list1.add(nums1[i]);
    }

    for (let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i])) list2.add(nums2[i]);
    }

    return [[...list1], [...list2]];
};

// runtime 21st percentile
// memory 94th percentile

// solution 2
function findDifference2(nums1: number[], nums2: number[]): number[][] {
    let list1: Set<number> = new Set();
    let list2: Set<number> = new Set();
    let nums1Set = new Set(nums1);
    let nums2Set = new Set(nums2);
    for (let i = 0; i < nums1.length; i++) {
        if (!nums2Set.has(nums1[i])) list1.add(nums1[i]);
    }

    for (let i = 0; i < nums2.length; i++) {
        if (!nums1Set.has(nums2[i])) list2.add(nums2[i]);
    }

    return [[...list1], [...list2]];
};

// runtime 49th percentile
// memory 68th percentile