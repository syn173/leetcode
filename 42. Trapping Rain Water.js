/**
 * @param {number[]} height
 * @return {number}
 */

/* dynamic programing from solution */
var trap_dp = function (height) {
  const len = height.length, rightHeight = Array(len);
  rightHeight[len - 1] = height[len - 1];
  for(let i = len - 2; i >= 0; --i) {
    rightHeight[i] = Math.max(height[i], rightHeight[i + 1]);
  }
  let leftHeight = 0, sum = 0;
  for(let i = 0; i < len; ++i) {
    leftHeight = Math.max(leftHeight, height[i]);
    sum += Math.min(leftHeight, rightHeight[i]) - height[i];
  }
  //console.log('sum', sum);
  return sum;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])