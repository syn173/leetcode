/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function (s) {
  var len = s.length, res = 0, i, j, count = 0, sMap = {}, code;
  if (len == 1) {
    return 1;
  }
  for (i = 0; i < len - 1; ++i) {
    sMap = {};
    count = 0;
    for (j = i; j < len; ++j) {
      code = s.charCodeAt(j);
      if (sMap[code]) {
        break;
      }
      sMap[code] = 1;
      count++;
      if (count > res) {
        res = count;
      }
    }
  }
  return res;
};

var lengthOfLongestSubstring = function (s) {
  var len = s.length, res = 0, i = 0, j = 0, sMap = {}, code;
  if (len == 1) {
    return 1;
  }
  for (; j < len; ++j) {
    code = s.charCodeAt(j);
    if (sMap[code] !== undefined) {
      i = Math.max(i, sMap[code]);
    }
    sMap[code] = j + 1;
    res = Math.max(res, j - i + 1);
  }
  return res;
};

var s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s))