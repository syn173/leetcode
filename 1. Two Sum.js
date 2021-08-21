/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var i;
  var len = nums.length;
  var obj = {};

  for (i = 0; i < len; ++i) {
    var left = target - nums[i];
    if (obj[nums[i]] !== undefined) {
      return [obj[nums[i]], i];
    }
    obj[left] = i;
  }
};

ff();
