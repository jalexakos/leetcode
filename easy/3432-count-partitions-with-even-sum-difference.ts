// Count Partitions with Even Sum Difference
// from https://leetcode.com/problems/count-partitions-with-even-sum-difference/description/

function countPartitions(nums: number[]): number {
  let evenCount = 0;
  let left: number = nums[0];
  let right: number = nums.slice(1, nums.length).reduce((a, b) => a + b, 0);
  if ((left - right) % 2 === 0) evenCount++;
  for (let i = 1; i < nums.length - 1; i++) {
    left += nums[i];
    right -= nums[i];
    if ((left - right) % 2 === 0) evenCount++;
  }

  return evenCount;
}

// runtime 100th percentile
// memory 56th percentile
