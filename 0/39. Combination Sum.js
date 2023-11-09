/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [], len = candidates.length;
  function recursion(arr, sum, start) {
    if (sum === target) {
      res.push([...arr]);
      return;
    }
    for(let i = 0; i < len; ++i) {
      if (candidates[i] + sum <= target && i >= start) {
        recursion(arr.concat(candidates[i]), sum + candidates[i], i);
      }
    }
  }
  recursion([], 0, 0);
  //console.log('res', res);
  return res;
};

// combinationSum([2, 3, 6, 7], 7);
combinationSum([2, 3, 5], 8);