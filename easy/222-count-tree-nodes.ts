// from https://leetcode.com/problems/count-complete-tree-nodes


// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
 

function countNodes(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    else if (!root.left && !root.right) {
        return 1;
    } else if (root.left && root.right) {
        return 1 + countNodes(root.left) + countNodes(root.right);
    } else if (root.left) {
        return 1 + countNodes(root.left);
    } else {
        return 1 + countNodes(root.right);
    }
};

// runtime 58th percentile
// memory 47th percentile