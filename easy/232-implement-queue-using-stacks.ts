class MyQueue {
    constructor() {
    }

    queue: Array<number> = [];

    push(x: number): void {
        this.queue = [...this.queue, x];
    }

    pop(): number {
        const firstElem = this.queue[0];
        this.queue = this.queue.slice(1,this.queue.length);
        return firstElem;
    }

    peek(): number {
        return this.queue[0];
    }

    empty(): boolean {
        return this.queue.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// runtime 39th percentile
// memory 6th percentile