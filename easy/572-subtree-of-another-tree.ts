// Subtree of Another Tree
// from https://leetcode.com/problems/subtree-of-another-tree/description/

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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (isSameTree(root,subRoot)) return true;
    let left;
    let right;
    if (root?.left) {
        left = isSubtree(root.left, subRoot);
    }

    if (root?.right) {
        right = isSubtree(root.right, subRoot);
    }
    return (!!left || !!right);

};

function isSameTree(treeOne: TreeNode | null, treeTwo: TreeNode | null): boolean {
    if (!treeOne && !treeTwo) return true;
    if (!treeOne && treeTwo) return false;
    if (treeOne && !treeTwo) return false;
    if (treeOne?.val !== treeTwo?.val) return false;

    return isSameTree(treeOne?.left!, treeTwo?.left!) && isSameTree(treeOne?.right!, treeTwo?.right!);
}

// runtime 24th percentile
// memory 52nd percentile