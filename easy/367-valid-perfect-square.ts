// from https://leetcode.com/problems/valid-perfect-square/description/

function isPerfectSquare(num: number): boolean {
    for (let i = 0; i <= num; i++) {
        if (i * i === num) return true;
        else if (i * i > num) return false;
    }

    return false;
};

// runtime 21st percentile
// memory 73rd percentile

// sum function, slightly tweaked as 1 <= num <= 2^31 - 1, thus checking zero is unnecessary
// I'm not sure why this very small tweak significantly changes the runtime and memory...

function isPerfectSquareTweaked(num: number): boolean {
    for (let i = 1; i <= num; i++) {
        if (i * i === num) return true;
        else if (i * i > num) return false;
    }

    return false;
};

// runtime 77th percentile
// memory 22nd percentile