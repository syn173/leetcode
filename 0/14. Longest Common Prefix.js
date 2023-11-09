/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const len = strs.length;
  if (!len) {
    return '';
  }

  if (len == 1) {
    return strs[0];
  }

  let i, k;
  for (i = 0; i < strs[0].length; ++i) {
    for(k = 1; k < len && i < strs[k].length && strs[0][i] == strs[k][i]; ++k);
    if (k < len) {
      break;
    }
  }
  return i == 0 ? '' : strs[0].slice(0, i);
};

// longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);