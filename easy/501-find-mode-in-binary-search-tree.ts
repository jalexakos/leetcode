// from https://leetcode.com/problems/find-mode-in-binary-search-tree/description/

// My attempt (didn't work)
let hashMap: Record<string,number> = {};
function findModeFailed(root: TreeNode | null): number[] {
    if (root) {
        findMode(root.left);
        findMode(root.right);
        if (hashMap[root.val]) {
            hashMap[root.val]++;
        } else {
            hashMap[root.val] = 1;
        }
    }

    let max = 0;
    let winner: number[] = [];
    for (const key of Object.keys(hashMap)) {
        if (hashMap[key] > max) {
            max = hashMap[key];
            winner = [Number(key)];
        } else if (hashMap[key] === max) {
            winner.push(Number(key));
        }
    }

    console.log(hashMap);
    return winner;
};

// Answer from chatGPT
function findMode(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    // Dictionary to store frequency of each value
    const freqMap: Record<number, number> = {};

    // Function to perform in-order traversal and update frequency map
    function inorder(node: TreeNode | null): void {
        if (node) {
            inorder(node.left);
            freqMap[node.val] = (freqMap[node.val] || 0) + 1;
            inorder(node.right);
        }
    }

    // Perform in-order traversal
    inorder(root);

    // Find the mode(s)
    const maxFreq = Math.max(...Object.values(freqMap));
    const modes: number[] = [];
    for (const [val, freq] of Object.entries(freqMap)) {
        if (freq === maxFreq) {
            modes.push(parseInt(val));
        }
    }

    return modes;
}

// runtime 40th percentile
// memory 5th percentile