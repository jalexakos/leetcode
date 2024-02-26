// from https://leetcode.com/problems/counter-ii/

// my first attempt

// type Counter = {
//     init: number,
//     memoedInit: number,
//     increment: () => number,
//     decrement: () => number,
//     reset: () => number,
// }

// function createCounter(init: number): Counter {
//     const counter: Counter = {
//         init: init,
//         memoedInit: init,
//         increment: () => {
//             this.memoedInit += 1;
//             return this.memoedInit;
//         },

//         decrement: () => {
//             this.memoedInit -= 1;
//             return this.memoedInit;
//         },

//         reset: () => {
//             this.memoedInit = this.init;
//             return this.memoedInit;
//         }

//     }

//     return counter;
// };

// from chatGPT 

type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
  let count = init;

  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    reset() {
      count = init;
      return count;
    }
  };
};

let counter = createCounter(7);
console.log(counter.increment()); // 8
console.log(counter.decrement()); // 7
console.log(counter.increment()); // 8
console.log(counter.increment()); // 9
console.log(counter.increment()); // 10
console.log(counter.reset()); // 7