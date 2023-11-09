/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var convert = function (s, n) {
  var i, res  = '', flag = 1;
  var len = s.length;
  if (n >= len || n == 1) {
    return s;
  }
  for (i  = 0; i < n; ++i) {
    j = i;
    flag = 1;
    while(j < len) {
      res += s[j];
      if (i == 0 || i == n - 1) {
        j += (n - 1) << 1
      } else {
        j += (flag ? n - i - 1 : i) << 1;
        flag = 1 - flag;
      }
    }
  }
  return res;
};

// console.log(convert('PAYPALISHIRING', 3));
// console.log(convert('PAYPALISHIRING', 4));
console.log(convert('AB', 1));
