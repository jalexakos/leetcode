// from https://leetcode.com/problems/range-sum-of-bst/description/

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

function rangeSumBST(root: TreeNode | null, low: number, high: number, set: Set<number> = new Set()): number {
    if (root) {
        if (root.val > low && root.val < high || root.val === low || root.val === high) {
            set.add(root.val);
        }
        rangeSumBST(root.left, low, high, set);
        rangeSumBST(root.right, low, high, set);
    }
    let total = 0;
    set.forEach((num) => total += num);

    return total;
    
};

// runtime 5th percentile
// memory 100th percentile