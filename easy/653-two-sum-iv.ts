// from https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/
// answer from https://www.youtube.com/watch?v=R0N31EfT8wQ

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

function findTarget(root: TreeNode | null, k: number, set: Set<number> = new Set()): boolean {
    if (root === null) return false;
    if (set.has(k - root.val)) return true;
    set.add(root.val);

    if (findTarget(root.left, k, set) || findTarget(root.right, k, set)) return true;

    return false;
};

// runtime 57th percentile  
// memory 85th percentile