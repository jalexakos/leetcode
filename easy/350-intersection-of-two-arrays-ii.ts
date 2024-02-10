// from https://leetcode.com/problems/intersection-of-two-arrays-ii

function intersect(nums1: number[], nums2: number[]): number[] {
    let hash1: Record<string,number> = {};
    let hash2: Record<string,number> = {};
    let answer: number[] = [];
    for (let i = 0; i < nums1.length; i++){
        if (hash1[nums1[i]]){
            hash1[nums1[i]]++;
        } else {
            hash1[nums1[i]] = 1;
        }
    }

    for (let x = 0; x < nums2.length; x++){
        if (hash2[nums2[x]]){
            hash2[nums2[x]]++;
        } else {
            hash2[nums2[x]] = 1;
        }
    }

    for (let y = 0; y < nums1.length; y++) {
        if (hash1[nums1[y]] && hash2[nums1[y]]) {
            if (hash1[nums1[y]] < hash2[nums1[y]]) {
                while (hash1[nums1[y]] > 0) {
                    answer.push(nums1[y]);
                    hash1[nums1[y]]--;
                }
            } else {
                while (hash2[nums1[y]] > 0) {
                    answer.push(nums1[y]);
                    hash2[nums1[y]]--;
                }
            }
        }
    }

    return answer;
};

// runtime 58th percentile
// memory 11th percentile