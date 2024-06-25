// from https://leetcode.com/problems/min-stack/description/'

// ChatGPT's solution
class MinStack {
    private stack: number[];
    private minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        if (this.stack.length === 0) {
            throw new Error("Stack is empty");
        }
        const poppedValue = this.stack.pop();
        if (poppedValue === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top(): number {
        if (this.stack.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        if (this.minStack.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.minStack[this.minStack.length - 1];
    }
}

// runtime 58th percentile
// memory 78th percentile