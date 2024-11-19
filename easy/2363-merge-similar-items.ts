// Merge Similar Items
// from https://leetcode.com/problems/merge-similar-items/

function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
    let valMap: Map<number,number> = new Map();

    for (let i = 0; i < items1.length; i++) {
        let item1 = items1[i];
        if (valMap.has(item1[0])) {
            valMap.set(item1[0], valMap.get(item1[0])! + item1[1]);
        } else {
            valMap.set(item1[0], item1[1]);
        }
    }

        for (let i = 0; i < items2.length; i++) {
        let item2 = items2[i];
        if (valMap.has(item2[0])) {
            valMap.set(item2[0], valMap.get(item2[0])! + item2[1]);
        } else {
            valMap.set(item2[0], item2[1]);
        }
    }

    let answer: number[][] = [];
    valMap.forEach((v,k) => {
        answer.push([k,v]);
    })

    return answer.sort((a,b) => a[0] - b[0]);
};

// runtime 40th percentile
// memory 81st percentile