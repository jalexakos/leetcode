// from https://leetcode.com/problems/sqrtx/

function mySqrt(x: number): number {
    for (let i = 0; i <= x; i++){
        if (i * i === x){
            return i;
        }
        else if (i * i > x){
            return i - 1
        }
    }

    return 0
};

// runtime 17th percentile
// memory 46th percentile