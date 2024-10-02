// Find Center of Star Graph
// from https://leetcode.com/problems/find-center-of-star-graph/description/

function findCenter(edges: number[][]): number {
    let nodeMap: Map<number, number> = new Map();
    let answer: number = 0;

    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        if (nodeMap.has(edge[0])) {
            nodeMap.set(edge[0], nodeMap.get(edge[0])! + 1);
        } else {
            nodeMap.set(edge[0], 1);
        }

        if (nodeMap.has(edge[1])) {
            nodeMap.set(edge[1], nodeMap.get(edge[1])! + 1);
        } else {
            nodeMap.set(edge[1], 1);
        }
    }

    nodeMap.forEach((v,k) => {
        if (v === edges.length) answer = k;
    })

    return answer;
};

// runtime 23rd percentile
// memory 23rd percentile