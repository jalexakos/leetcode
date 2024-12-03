// Minimum Recolors to Get K Consecutive Black Blocks
// from https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/description/

function minimumRecolors(blocks: string, k: number): number {
    let smallest = 101;
    let x = 0;
    for (let i = k; i <= blocks.length; i++) {
        let block = blocks.slice(x,i).split("");
        let bCount = 0;
        block.forEach(elem => {
            if (elem === "B") bCount++;
        });

        if (k - bCount < smallest) smallest = k - bCount;
        x++;
    }

    return smallest;
};

// runtime 23rd percentile
// memory 26th percentile