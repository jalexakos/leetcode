// from https://leetcode.com/problems/allow-one-function-call/description/

// defined in easy/2703-return-length-of-arguments-passed.ts
// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

// from chatGPT
function once(fn: Function): OnceFn {
    let called = false; // Variable to track if the function has been called before
    
    return function (this: any, ...args: any[]): any {
        if (!called) { // If the function hasn't been called before
            called = true; // Mark that the function has been called
            return fn.apply(this, args); // Call the original function with the provided arguments
        } else {
            return undefined; // If the function has been called before, return undefined
        }
    };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */