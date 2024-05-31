// from https://leetcode.com/problems/kth-largest-element-in-a-stream/description/

class KthLargest {
    constructor(private k: number, private nums: number[]) {
        this.k = k;
        this.nums = nums.sort((a,b) => a - b);
    }

    add(val: number): number {
        this.nums.push(val);
        this.nums.sort((a,b) => a - b);
        return this.nums[this.nums.length - this.k];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// runtime 13th percentile
// memory 5th percentile

// re-doing this with a slight optimization
class KthLargestOpt {
    constructor(private k: number, private nums: number[]) {
        this.k = k;
        this.nums = nums.sort((a,b) => a - b);
    }

    add(val: number): number {
        let i = 0;
        while (val > this.nums[i]) {
            i++;
        }
        this.nums.splice(i,0,val);
        return this.nums[this.nums.length - this.k];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// runtime 30th percentile
// memory 93rd percentile