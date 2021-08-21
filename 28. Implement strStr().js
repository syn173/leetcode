/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }
  const next = getNext(needle), len1 = haystack.length, len2 = needle.length;
  let i = 0, j = 0;
  while(i < len1 && j < len2) {
    if (j === -1 || haystack[i] === needle[j]) {
      ++i;
      ++j;
    } else {
      j = next[j];
    }
  }
  return j < len2 ? -1 : i - len2;
};

function getNext(needle) {
  const next = [-1], len = needle.length;
  let j = -1, i = 0;
  while(i < len - 1) {
    if (j == -1 || needle[i] === needle[j]) {
      ++i;
      ++j;
      if(needle[i] !== needle[j]) {
        next[i] = j;
      } else {
        next[i] = next[j];
      }
    } else {
      j = next[j];
    }
  }
  return next;
}
