// from https://leetcode.com/problems/timeout-cancellation/

type JSONValueTimeoutCancellation = null | boolean | number | string | JSONValueTimeoutCancellation[] | { [key: string]: JSONValueTimeoutCancellation };
type FnTimeoutCancellation = (...args: JSONValueTimeoutCancellation[]) => void

function cancellable(fn: FnTimeoutCancellation, args: JSONValueTimeoutCancellation[], t: number): Function {
    
    let functionToRun = setTimeout(() => fn(...args), t);

    return function () {
        clearTimeout(functionToRun);
    }
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

// runtime 98th percentile
// memory 66th percentile