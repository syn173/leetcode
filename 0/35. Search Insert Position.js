/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert1 = function (nums, target) {
  let l = 0, r = nums.length - 1, mid;
  while(l <= r) {
    mid = (l + r) >> 1;
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

var searchInsert = function (nums, target) {
  let l = 0, r = nums.length - 1, mid;
  while (l <= r) {
    mid = (l + r) >> 1;
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;
};

console.log(searchInsert([1, 3], 4));