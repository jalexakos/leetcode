class MyStack {
    constructor() {
    }

    queue: Array<number> = [];

    push(x: number): void {
        let freshArr = new Array(this.queue.length + 1);
        for (let i = 0; i < freshArr.length; i++){
            if (i < this.queue.length){
                freshArr[i] = this.queue[i];
            } else {
                freshArr[i] = x;
            }
        }

        this.queue = freshArr;
    }

    pop(): number | undefined {
        if (this.queue.length === 0) return undefined;
        let queueCopy = new Array(this.queue.length - 1);
        for (let i = 0; i < queueCopy.length; i++){
            queueCopy[i] = this.queue[i];
        }
        let poppedVal = this.queue[this.queue.length - 1];
        this.queue = queueCopy;
        return poppedVal;
    }

    top(): number {
        return this.queue[this.queue.length - 1];
    }

    empty(): boolean {
        return this.queue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// runtime 63rd percentile
// memory 5th percentile