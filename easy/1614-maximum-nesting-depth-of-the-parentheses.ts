// Maximum Nesting Depth of the Parentheses
// from https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/

function maxDepth(s: string): number {
    let stack = [];
    let depth = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push("(");
            if (stack.length > depth) depth = stack.length;
        } else if (s[i] === ")") stack.pop();
    }

    return depth;
};

// runtime 70nd percentile
// memory 87th percentile