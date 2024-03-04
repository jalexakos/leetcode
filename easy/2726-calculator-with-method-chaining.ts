// from https://leetcode.com/problems/calculator-with-method-chaining/

class Calculator {
    
    constructor(public value: number) {
        this.value = value;
    }
    
    add(value: number): Calculator {
        this.value = this.value + value;
        return this;
    }
    
    subtract(value: number): Calculator {
        this.value = this.value - value;
        return this;
    }
    
    multiply(value: number): Calculator {
        this.value = this.value * value;
        return this;
    }
    
    divide(value: number): Calculator {
        if (value === 0) {
            throw new Error('Division by zero is not allowed');
        }
        this.value = this.value / value;
        return this;
    }
    
    power(value: number): Calculator {
        this.value = this.value ** value;
        return this;
    }
    
    getResult(): number {
        return this.value;
    }
}

// runtime 30th percentile
// memory 41st percentile