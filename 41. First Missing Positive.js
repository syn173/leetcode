/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  function swap(i, j) {
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
  }
  const len = nums.length;
  for(let i = 0; i < len; ++i) {
    while (nums[i] > 0 && nums[i] <= len && nums[i] !== nums[nums[i] - 1]) {
      swap(i, nums[i] - 1);
    }
  }
  for(let i = 0; i < len; ++i) {
    if (i + 1 !== nums[i]) {
      return i + 1;
    }
  }
  return len + 1;
};

console.log(firstMissingPositive([2,3, -1]))