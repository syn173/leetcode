/**
 * 81. Search in Rotated Sorted Array II
 * 二分查找，区间做个偏移处理
 */

function search(nums: number[], target: number): boolean {
  const len = nums.length;
  let left = 0;
  for (; left < len && nums[left] <= nums[left + 1]; ++left);
  if (left === len) {
    left = 0;
  } else {
    left++;
  }
  let right = len + left - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const val = nums[mid % len];

    if (val === target) {
      return true;
    }
    if (val < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

console.log(search([2, 2, 2, 3, 2, 2, 2], 3));
