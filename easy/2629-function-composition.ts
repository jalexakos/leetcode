// from https://leetcode.com/problems/function-composition/description/

type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {
        if (functions.length === 0) return x;
        let y = x;
        for (let i = functions.length - 1; i > -1; i--) {
            y = functions[i](y);
        }

        return y;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// runtime 67th percentile
// memory 20th percentile