// Evaluate Boolean Binary Tree
// from https://leetcode.com/problems/evaluate-boolean-binary-tree/description/

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

function evaluateTree(root: TreeNode | null): boolean {
    if (!root?.left) return root?.val === 1;

    if (root?.val === 2) return evaluateTree(root?.left) || evaluateTree(root?.right);
    
    return evaluateTree(root?.left) && evaluateTree(root?.right);
};

// runtime 100th percentile
// memory 86th percentile