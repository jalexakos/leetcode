// from https://leetcode.com/problems/design-hashset/description/

class MyHashSet {
    constructor(private set: Array<number>) {
        this.set = set ? set : [];
    }

    add(key: number): void {
        let x = this.set?.length ? this.set.length : 0;
        for (let i = 0; i < x; i++) {
            if (this.set[i] === key) return;
        }

        this.set.push(key);
    }

    remove(key: number): void {
        for (let i = 0; i < this.set.length; i++) {
            if (this.set[i] === key) {
                this.set = this.set.slice(0,i).concat(this.set.slice(i + 1, this.set.length));
            }
        }
    }

    contains(key: number): boolean {
        for (let i = 0; i < this.set.length; i++) {
            if (this.set[i] === key) return true;
        }

        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

// runtime 13th percentile
// memory 22nd percentile