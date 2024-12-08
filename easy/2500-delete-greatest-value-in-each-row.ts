// Delete Greatest Value in Each Row
// from https://leetcode.com/problems/delete-greatest-value-in-each-row/description/

function deleteGreatestValue(grid: number[][]): number {
    let answer = 0;
    for (let i = 0; i < grid.length; i++) {
        grid[i].sort((a,b) => a - b);
    }

    
    let arr = grid[0];
    while (arr.length > 0) {
        let max = 0;
        // length is # of arrays
        for (let i = 0; i < grid.length; i++) {
            let largest = grid[i][grid[i].length - 1];
            if (largest > max) {
                max = largest;
            }
            grid[i].splice(grid[i].length - 1, 1);
        }

        answer += max;
    }

    return answer;
};

// memory 66th percentile
// runtime 31st percentile