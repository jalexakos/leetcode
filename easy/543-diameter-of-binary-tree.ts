// from https://leetcode.com/problems/diameter-of-binary-tree/description

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

function dfs(root: TreeNode | null): number {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);

    return 1 + ((right > left) ? right : left);
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let left = dfs(root.left);
    let right = dfs(root.right);

    let leftTotal = diameterOfBinaryTree(root.left);
    let rightTotal = diameterOfBinaryTree(root.right);
    let total = right + left;

    if (leftTotal > total && leftTotal > rightTotal) return leftTotal;
    if (rightTotal > total && rightTotal > leftTotal) return rightTotal;

    return total;
};

// runtime: 7th percentile
// memory: 58th percentile

// ChatGPT's solution - included because it's more performant than mine
function diameterOfBinaryTreeGPT(root: TreeNode | null): number {
    let maxDiameter = 0;

    function depth(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        return Math.max(leftDepth, rightDepth) + 1;
    }

    depth(root);
    return maxDiameter;
}

// rutime: 98th percentile
// memory: 56th percentile