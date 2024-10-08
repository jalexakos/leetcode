// Three Divisors
// from https://leetcode.com/problems/three-divisors/description/

function isThree(n: number): boolean {
    let divCount = 0;
    for (let i = n; i > 0; i--) {
        if (n % i === 0) divCount++;
    }

    return divCount === 3;
};

// runtime 80th percentile
// memory 62nd percentile