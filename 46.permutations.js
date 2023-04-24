/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const len = nums.length;
  const res = [];
  function travel(level) {
    if (level === len) {
      res.push(Array.from(nums));
      return;
    }
    for (let i = 0; i <= level; ++i) {
      swap(i, level);
      travel(level + 1);
      swap(i, level);
    }
  }

  travel(1);

  function swap(i, j) {
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
  }

  // console.log("res", res);
  return res;
};

// permute([0, 1]);
permute([1, 2, 3]);
