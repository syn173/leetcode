/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const res = parseInt(dividend / divisor);
  const MIN = -Math.pow(2, 31);
  const MAX = Math.pow(2, 31) - 1;
  return res < MIN ? MIN : res > MAX ? MAX : res;
};