// Find a Corresponding Node of a Binary Tree in a Clone of That Tree
// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/description/

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

function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
    if (cloned) {
        if (cloned?.val === target?.val) return cloned;
        else {
            let left = getTargetCopy(original, cloned.left, target);
            let right = getTargetCopy(original, cloned.right, target);

            if (left) return left;
            if (right) return right;
        }
    };

    return null;
};

// runtime 26th percentile 
// memory 66th percentile