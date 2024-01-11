// from https://leetcode.com/problems/sqrtx/

function mySqrt(x: number): number {
    for (let i = 0; i <= x; i++){
        if (i * i === x){
            return i;
        }
        else if (i * i > x && i > 0){
            return i - 1
        }
    }

    return 0
};

// runtime 11th percentile
// memory 7th percentile