// from https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
    for (let num = digits.length -1; num >=0; num--){
        if (digits[num] < 9){
            digits[num]++;
            return digits;
        }

        digits[num] = 0;

        if (num === 0 && digits[num] === 0){
            digits = [1].concat(digits);
        }
    }

    return digits;
};

// runtime 67th percentile
// memory 75th percentile