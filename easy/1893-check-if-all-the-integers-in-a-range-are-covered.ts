// Check if All the Integers in a Range Are Covered
// from https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/description/

function createRange(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  
  function isCovered(ranges: number[][], left: number, right: number): boolean {
      // create arr of nums to check for
      let numsArr: number[] = createRange(left, right);
  
      let rangesSet = new Set();
      for (let i = 0; i < ranges.length; i++) {
          let range = createRange(ranges[i][0], ranges[i][1]);
  
          for (let j = 0; j < range.length; j++) {
              rangesSet.add(range[j]);
          }
      }
  
      for (let i = 0; i < numsArr.length; i++) {
          if (!rangesSet.has(numsArr[i])) return false;
      }
  
      return true;
  };

// runtime 64th percentile
// memory 71st percentile