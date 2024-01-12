// from https://leetcode.com/problems/valid-perfect-square/description/

function isPerfectSquare(num: number): boolean {
    for (let i = 0; i <= num; i++) {
        if (i * i === num) return true;
        else if (i * i > num) return false;
    }

    return false;
};

// runtime 21st percentile
// memory 73rd percentile
