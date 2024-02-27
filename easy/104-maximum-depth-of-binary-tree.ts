// from https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

// my first attempt
function maxDepthFailed(root: TreeNode | null): number {
    if (root) {
        if (!root.left && !root.right) return 1;
        else if ((1 + maxDepthFailed(root.left)) > (1 + maxDepthFailed(root.right))) {
            return 1 + maxDepthFailed(root.left);   
        }
        else return 1 + maxDepthFailed(root.right);
    } else {
        return 0;
    }
};

// it seemed to work, but the problem is how high the callstack goes on my recursive call. 
// It failed when the tree got too large.

// solution from chatGPT
function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
};

// runtime 93rd percentile
// memory 27th percentile