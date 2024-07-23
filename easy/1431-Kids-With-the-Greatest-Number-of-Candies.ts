// Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

function findMaxVal(arr: number[]): number {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }

    return max;
}

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
   let answer: boolean[] = [];
   let max = findMaxVal(candies);

   for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) answer.push(true);
        else answer.push(false);
   }

   return answer;
};

// runtime 91st percentile
// memory 65th percentile