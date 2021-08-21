/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0, r = nums.length - 1;
  while(l <= r) {
    const mid = (l + r) >> 1;
    if ( nums[mid] === target) {
      return mid;
    }

    if (nums[l] < nums[r]) {
      if (nums[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] > nums[r]) {
        if (target < nums[mid] && target >= nums[l]) {
          r = mid - 1;
        } else {
          l = mid + 1;
        }
      } else {
        if (target > nums[mid] && target <= nums[r]) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
    }
  }
  return -1;
};

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3))