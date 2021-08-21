/**
 * 时隔五个月，同样代码再次提交就通过了，之前超时的是有个用例数组长度远超出题目描述，
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump1 = function (nums) {
  const len = nums.length;
  const step = [];
  step[0] = 0;
  for (let i = 1; i < len; ++i) {
    step[i] = 10000;
    for (let j = 0; j < i; ++j) {
      if (nums[j] >= i - j) {
        step[i] = Math.min(step[i], step[j] + 1);
      }
    }
  }
  return step[len - 1];
};

/**
 * 因为题目保证肯定有解，所以不会存在连续的0，那么所有跳跃路径一定是连续的
 * newMax表示能够跳到的最远距离，而preMax缓存上一次值，所以每次跳到preMax位置上时候，就可以更新一次步数，因为跳跃是连续的
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const len = nums.length;
  let num = 0;
  let preMax = 0;
  let newMax = 0;
  for(let i = 0; i < len - 1; ++i) {
    newMax = Math.max(newMax, i + nums[i]);
    if (i === preMax) {
      preMax = newMax;
      ++num;
    }
  }
  return num;
};

console.log(jump([2, 3, 1, 1, 4]));
// console.log(jump([1, 1, 1, 1]));
