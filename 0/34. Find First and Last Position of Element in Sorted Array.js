/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l = 0, r = nums.length - 1, i, mid;
  while(l < r) {
    mid = (l + r) >> 1;
    if (nums[mid] >= target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  if (nums[l] === target) {
    i = l;
  } else {
    return [-1, -1];
  }
  l = 0;
  r = nums.length - 1;
  while(l < r) {
    mid = (l + r + 1) >> 1;
    if (nums[mid] <= target) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return [i, r];
};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))