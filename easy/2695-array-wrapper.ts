// from https://leetcode.com/problems/array-wrapper/

class ArrayWrapper {
    
    constructor(private nums: number[]) {
        this.nums = nums;
    }
    
    valueOf(): number {
        return this.nums.reduce((a,b) => a + b, 0);
    }
    
    toString(): string {
        let x = this.nums.reduce((a,b) => String(a) + String(b) + ',','');
        return ('[' + x.slice(0, x.length - 1) + ']');
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */