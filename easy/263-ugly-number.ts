// from https://leetcode.com/problems/ugly-number/description/

// solution from GeeksforGeeks: https://www.geeksforgeeks.org/ugly-numbers/
function maxDivide(a: number, b: number): number {
    while (a % b === 0)
        a = a / b;
    return a;
}

function isUgly(n: number): boolean {
    if (n < 1) return false;

    n = maxDivide(n, 2);
    n = maxDivide(n, 3);
    n = maxDivide(n, 5);

    return (n === 1) ? true : false;
};

// runtime 46th percentile
// memory 56th percentile