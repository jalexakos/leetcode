// Search a 2D Matrix
// from https://leetcode.com/problems/search-a-2d-matrix/description/

function binarySearch(arr: number[], target: number): number {
  if (arr.length === 1) {
    if (arr[0] === target) return 0;
    return -1;
  }
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) left = mid + 1;
    else if (arr[mid] > target) right = mid - 1;
    else return mid;
  }

  return -1;
}

function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 1) return binarySearch(matrix[0], target) !== -1;
  // get the row idx
  let lowArrIdx = 0;
  let highArrIdx = matrix.length - 1;
  let answer: number = -1;
  while (lowArrIdx <= highArrIdx) {
    let midArrIdx = Math.floor((lowArrIdx + highArrIdx) / 2);
    if (matrix[midArrIdx][0] === target) return true;
    else if (matrix[midArrIdx][matrix[midArrIdx].length - 1] === target)
      return true;
    else if (
      matrix[midArrIdx][0] < target &&
      matrix[midArrIdx][matrix[midArrIdx].length - 1] > target
    ) {
      answer = binarySearch(matrix[midArrIdx], target);
      break;
    } else if (matrix[midArrIdx][0] > target) {
      highArrIdx = midArrIdx - 1;
    } else {
      lowArrIdx = midArrIdx + 1;
    }
  }

  return answer !== -1;
}

// runtime 100th percentile
// memory 19th percentile
