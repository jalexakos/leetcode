// Container With Most Water
// from https://leetcode.com/problems/container-with-most-water/description/

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  // sH stands for smallerHeight
  let sH = Math.min(height[left], height[right]);
  let width = right - left;
  let max = sH * width;
  while (left < right) {
    sH = Math.min(height[left], height[right]);
    width = right - left;
    let tempMax = sH * width;
    if (tempMax > max) max = tempMax;
    if (height[left] < height[right]) left++;
    else right--;
  }

  return max;
}

// runtime 51st percentile
// memory 12th percentile
