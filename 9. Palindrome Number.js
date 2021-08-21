/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const s = String(x);
  let i = 0, j = s.length - 1;
  for(;s[i] == s[j] && i <= j; ++i, --j);
  return i >= j;
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))