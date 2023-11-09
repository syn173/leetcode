/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0;

  const flag = x > 0 ? 1 : -1;
  const maxB = Math.pow(2, 31);
  const maxI = maxB - 1;
  const minI = -maxB;
  x = Math.abs(x);
  while(x != 0) {
    const digit = x % 10;
    res = (10 * res + digit);
    if (flag > 0 && res > maxI || flag < 0 && -res < minI) {
      return 0;
    }
    x = parseInt(x / 10);
  }
  return flag * res;
};
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));