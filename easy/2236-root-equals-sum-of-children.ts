// Root Equals Sum of Children
// from https://leetcode.com/problems/root-equals-sum-of-children/description/

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

function checkTree(root: TreeNode | null): boolean {
    return root?.val === (root!.left!.val! + root!.right!.val!);
};

// runtime 100th percentile
// memory 28th percentile