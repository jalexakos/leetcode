// from https://leetcode.com/problems/counter/description/

function createCounter(n: number): () => number {
    
    return function() {
        let m = n;
        n += 1;
        return m;
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// runtime 99th percentile
// memory 20th percentile