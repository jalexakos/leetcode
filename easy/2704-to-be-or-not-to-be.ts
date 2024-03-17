// from https://leetcode.com/problems/to-be-or-not-to-be/description/

type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (compareVal) => {
            if (compareVal === val) return true;

            throw new Error('Not Equal');
        },

        notToBe: (compareVal) => {
            if (compareVal !== val) return true;

            throw new Error('Equal');
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// runtime 52nd percentile
// memory 20th percentile