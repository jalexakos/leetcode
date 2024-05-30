// from https://leetcode.com/problems/remove-outermost-parentheses/description/

function removeOuterParentheses(s: string): string {
    let stack: Array<string> = [s[0]];
    let answer: Array<string> = [];
    let i: number = 1;

    while (i < s.length) {
        while (stack.length > 0) {
            if (s[i] === "(") {
                stack.push(s[i]);
                answer.push(s[i]);
            } else if (s[i] === ")") {
                if (stack.length > 1) {
                    answer.push(s[i]);
                }
                stack.pop();
            }
            i++;
        }
        stack.push(s[i]);
        i++;
    }

    return answer.join('');
};

// runtime 29th percentile
// memory 25th percentile

// failed attempt
function removeOuterParenthesesFailed(s: string): string {
    let stack: Array<string> = [s[0]];
    let answer: Array<string> = [];
    let i: number = 1;

    while (i < s.length) {
        while (stack.length > 0) {
            if (s[i] === "(") {
                stack.push(s[i]);
            } else if (s[i] === ")") {
              if (stack.length > 1) {
                let count = 0;
                while (stack.length > 1) {
                    answer.push(stack.pop()!);
                    count++;
                }
                while (count > 0) {
                    answer.push(s[i]);
                    count--;
                  }
                } else {
                    stack.pop();
                  }
            }
            i++;
        }
        stack.push(s[i]);
        i++;
    }

    return answer.join('');
};