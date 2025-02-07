// Hamming Distance
// from https://leetcode.com/problems/hamming-distance/description/

function hammingDistance(x: number, y: number): number {
  if (x === y) return 0;

  let xStr = x.toString(2);
  let yStr = y.toString(2);

  if (xStr.length < yStr.length) {
    while (xStr.length < yStr.length) {
      xStr = "0" + xStr;
    }
  } else if (xStr.length > yStr.length) {
    while (xStr.length > yStr.length) {
      yStr = "0" + yStr;
    }
  }

  let count = 0;

  for (let i = 0; i < xStr.length; i++) {
    if (xStr[i] !== yStr[i]) count++;
  }
  return count;
}

// runtime 100th percentile
// memory 24th percentile
