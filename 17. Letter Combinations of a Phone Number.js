/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  var map = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  var len = digits.length, result = [];

  if (!digits) {
    return [];
  }
  function search(i, rep) {
    if (i === len) {
      result.push(rep);
      return;
    }
    var chars = map[digits[i] - 2];
    for (let k = 0; k < chars.length; ++k) {
      search(i + 1, rep + chars[k]);
    }
  }
  search(0, '');
  //console.log(result);
  return result;
};

var letterCombinations2 = function (digits) {
  var map = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  var len = digits.length, result = [];

  if (!digits) {
    return [];
  }
  function search(rep) {
    var rlen = rep.length;
    if (rlen === len) {
      result.push(rep);
      return;
    }
    var chars = map[digits[rlen] - 2]
    for(let k = 0; k < chars.length; ++k) {
      search(rep + chars[k]);
    }
  }
  search('');
  //console.log(result);
  return result;
};

letterCombinations('23');