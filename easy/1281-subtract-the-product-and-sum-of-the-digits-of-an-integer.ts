// Subtract the Product and Sum of Digits of an Integer
// from https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/

function subtractProductAndSum(n: number): number {
    let arrOfN = String(n).split('');
    let sum = 0;
    let product = 1;

    for (let i = 0; i < arrOfN.length; i++) {
        let num = Number(arrOfN[i]);
        sum += num;
        product *= num;
    }

    return product - sum;
};

// runtime 49th percentile
// memory 76th percentile