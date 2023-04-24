/**
 * 参考了 https://segmentfault.com/a/1190000040142137
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const len = nums.length;
  const res = [];

  function travel(level) {
    if (level >= len) {
      res.push(Array.from(nums));
      return;
    }
    const objSet = {};
    for (let i = level; i < len; ++i) {
      if (objSet[nums[i]]) {
        continue;
      }

      objSet[nums[i]] = 1;
      // console.log(level, i, nums);
      swap(i, level);
      travel(level + 1);
      swap(i, level);
    }
  }

  travel(0);

  function swap(i, j) {
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
  }

  // console.log('res', res);
  return res;
};

// permuteUnique([0, 1]);
// permuteUnique([1, 2, 3]);
permuteUnique([1, 2, 2]);
// permuteUnique([2, 2, 1, 1]);
