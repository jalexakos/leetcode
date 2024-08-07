// Three Consecutive Odds
// from https://leetcode.com/problems/three-consecutive-odds/description/

function threeConsecutiveOdds(arr: number[]): boolean {
    for (let i = 2; i < arr.length; i++) {
        if (arr[i - 2] % 2 !== 0 && arr[i - 1] % 2 !== 0 && arr[i] % 2 !== 0) return true;
    }
    
    return false;
};

// runtime 89th percentile
// memory 52nd percentile