// from https://leetcode.com/problems/create-hello-world-function/description/

function createHelloWorld() {
    
    return function(...args: any[]): string {
        return 'Hello World';
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// runtime 85th percentile
// memory 9th percentile