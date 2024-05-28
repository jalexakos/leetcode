// from https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// from chatGPT
function findSecondMinimumValue(root: TreeNode | null, numSet: Set<number> = new Set()): number {
    if (root === null) return -1;

    let min1 = root.val;
    let min2 = Infinity;

    const dfs = (node: TreeNode | null) => {
        if (node === null) return;

        if (node.val > min1 && node.val < min2) {
            min2 = node.val;
        }

        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);

    return min2 === Infinity ? -1 : min2;
};

// runtime 87th percentile
// memory 39th percentile