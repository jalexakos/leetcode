// from https://leetcode.com/problems/same-tree/description/

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

// works, but it's annoyingly verbose and takes up a lot of excess memory

// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//     if (!p && !q) return true;
//     if (!p && q) return false;
//     if (p && !q) return false;
//     if (p?.val !== q?.val) return false;

//     // had to create these to comply w/ TS. It's annoying
//     // that TS can't identify that these checks could not be hit 
//     // if left and/or right for one of these values is undefined
//     let pLeft = p?.left ?? null;
//     let qLeft = q?.left ?? null;
//     let pRight = p?.right ?? null;
//     let qRight = q?.right ?? null;
//     let leftCheck = isSameTree(pLeft, qLeft);
//     let rightCheck = isSameTree(pRight, qRight);

//     return leftCheck && rightCheck;
    
// };

// type safe way

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true;
    if (!p && q) return false;
    if (p && !q) return false;
    if (p!.val !== q!.val) return false;

    let leftCheck = isSameTree(p!.left, q!.left);
    let rightCheck = isSameTree(p!.right, q!.right);

    return leftCheck && rightCheck;  
}

// runtime 96th percentile
// memory 22nd percentile