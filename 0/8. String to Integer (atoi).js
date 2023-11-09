/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  str = str.trim();
  let i = str[0] == '-' || str[0] == '+' ? 1 : 0;
  while(str[i++] && /\d/.test(str[i])){};

  const maxB = Math.pow(2, 31);
  const maxI = maxB - 1;
  const minI = -maxB;
  const numStr = str.slice(0, i);
  const num = +numStr;
  return  num != +num ? 0 : num > maxI ? maxI : num < minI ? minI : num;
};

console.log(myAtoi('42'));
console.log(myAtoi('     42'));
console.log(myAtoi('aaaaa42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('-91283472332'));
console.log(myAtoi('   -88827   5655  U'));
