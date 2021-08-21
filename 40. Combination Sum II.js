/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [], len = candidates.length;
  candidates.sort((a, b) => a - b);
  function recursion(arr, sum, start) {
    if (sum === target) {
      res.push(arr);
    }
    for (let i = start + 1; i < len; ++i) {
      if (candidates[i] + sum <= target) {
        recursion(arr.concat(candidates[i]), sum + candidates[i], i);
      }
      while (candidates[i] === candidates[i+1]) {
        ++i;
      }
    }
  }
  recursion([], 0, -1);
  // console.log('res', res);
  return res;
};

// combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
combinationSum2([2, 5, 2, 1, 2], 5)