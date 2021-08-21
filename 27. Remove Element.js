/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const len = nums.length;
  let i = 0, j = 0;
  for(; j < len; ++j) {
    if(nums[j] !== val) {
      nums[i++] = nums[j];
    }
  }
  return i;
};