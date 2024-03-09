// from https://leetcode.com/problems/minimum-common-value/description/

function getCommon(nums1: number[], nums2: number[]): number {
    let pointer1 = 0;
    let pointer2 = 0;
    while (true) {
        if (nums1[pointer1] === nums2[pointer2]) return nums1[pointer1];
        else if (nums1[pointer1] > nums2[pointer2]) {
            if (pointer2 < (nums2.length - 1)) {
                pointer2++;
            } else {
                return -1;
            }
        } else {
            if (pointer1 < (nums1.length - 1)) {
                pointer1++;
            } else {
                return -1;
            }
        }
    }
};

// runtime 70th percentile
// memory 45th percentile