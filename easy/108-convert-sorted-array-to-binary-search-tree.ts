// from https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    let midpoint = Math.floor(nums.length / 2);
    let midVal = nums[midpoint];

    let leftNums = nums.slice(0,midpoint);
    let rightNums = nums.slice(midpoint + 1);

    let leftNode: TreeNode | null = null;
    let rightNode: TreeNode | null = null;
    
    if (leftNums.length > 0) {
        leftNode = sortedArrayToBST(leftNums);
    }
    if (rightNums.length > 0) {
        rightNode = sortedArrayToBST(rightNums);
    }

    let node = new TreeNode(midVal, leftNode, rightNode);

    return node;
};

// runtime 46th percentile
// memory 34th percentile