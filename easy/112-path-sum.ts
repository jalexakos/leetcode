// from https://leetcode.com/problems/path-sum/description/

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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root) {
        let newSum = targetSum - root.val;
        if (newSum === 0 && !root.left && !root.right) return true;
        else {
           return hasPathSum(root.left, newSum) || hasPathSum(root.right, newSum);
        }
    }
    return false;
};

// runtime 67th percentile
// memory 70th percentile