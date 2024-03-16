// from https://leetcode.com/problems/sort-by/description/

// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type FnSort = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: FnSort): JSONValue[] {
    return arr.sort((a,b) => fn(a) - fn(b));
};