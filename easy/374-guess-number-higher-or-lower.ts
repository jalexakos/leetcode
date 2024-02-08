// from https://leetcode.com/problems/guess-number-higher-or-lower/

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

 // dummy guess function I wrote up to stop TS errors/test it
 var guess = function(num: number): number {
    if (num > 6) return -1;
    if (num < 6) return 1;
    return 0;
 }


 function guessNumber(n: number, floor:number = 1): number {
    let myGuess = Math.floor((n + floor) / 2);
    if (guess(myGuess) === 0) {
        return myGuess;
    } else if (guess(myGuess) === -1) {
        myGuess = myGuess - 1;
        return guessNumber(myGuess, floor);
    } else {
        myGuess = myGuess + 1;
        return guessNumber(n, myGuess);
    }
};

// runtime 26th percentile
// memory 14th percentile