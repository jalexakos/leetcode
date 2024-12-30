// Find the Width of Columns of a Grid
// from https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/description/

function findColumnWidth(grid: number[][]): number[] {
    let answer: number[] = [];
    let len = grid[0].length;
    
    for (let i = 0; i < len; i++) {
        let width = 0;
        for (let j = 0; j < grid.length; j++) {
            if (String(grid[j][i]).length > width) width = String(grid[j][i]).length;
        }

        answer.push(width);
    }

    return answer;
};

// runtime 27th percentile
// memory 88th percentile