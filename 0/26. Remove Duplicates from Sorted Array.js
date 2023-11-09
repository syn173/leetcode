/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var len = nums.length;
  var i = 0, j = 0;
  while(j < len) {
    while(nums[j] === nums[j+1]) ++j;
    nums[i++] = nums[j++];
  }
  return i;
};

removeDuplicates([1,1,2]);