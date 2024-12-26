// K Items With the Maximum Sum
// from https://leetcode.com/problems/k-items-with-the-maximum-sum/description/

function kItemsWithMaximumSum(numOnes: number, numZeros: number, numNegOnes: number, k: number): number {
    if (numOnes >= k) return k;

    let count = numOnes;
    let answer = numOnes;

    while (count < k) {
        count += 1;
        if (numZeros) numZeros--;
        else if (numNegOnes) {
            numNegOnes--;
            answer--;
        }
    }

    return answer;
};

// runtime 100th percentile
// memory 85th percentile