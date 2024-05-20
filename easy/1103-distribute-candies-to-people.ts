// from https://leetcode.com/problems/distribute-candies-to-people/description/

function distributeCandiesToPeople(candies: number, num_people: number): number[] {
    let arr = Array(num_people).fill(0);

    let candy = 1;
    let i = 0;
    while (candies > 0) {
        if (candies < candy) {
            candy = candies;
            candies = 0;
        }
        if (i > arr.length - 1) {
            i = 0;
        }
         
        arr[i] = arr[i] + candy;
        i++;
        candies -= candy;
        candy++;
    }

    return arr;
};

// runtime 100th percentile
// memory 50th percentile