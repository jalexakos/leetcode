// from https://leetcode.com/problems/add-two-promises/description/

type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    let value1 = await promise1.then();
    let value2 = await promise2.then();
    return value1 + value2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// runtime 75th percentile
// memory 57th percentile