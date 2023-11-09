/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch1 = function (s, p) {
  return new RegExp('^' + p + '$').test(s);
};

var isMatch2 = function (s, p) {
  const slen = s.length, plen = p.length;
  function search(i, j) {
    if (j === plen) {
      return i === slen;
    }
    const firstMatch = s[i] !== undefined && (s[i] === p[j] || p[j] === '.');
    if (p[j + 1] === '*') {
      return search(i, j + 2) || (firstMatch && search(i + 1, j));
    } else {
      return firstMatch && search(i + 1, j + 1);
    }
  }
  return search(0, 0);
};

var isMatch3 = function (s, p) {
  const slen = s.length, plen = p.length;
  const map = new Map();
  function search(i, j) {
    const key = i + '_' + j;
    let ans = !!map.get(key);
    if (ans) {
      return ans;
    }
    if (j === plen) {
      return ans = i === slen;
    }

    const firstMatch = s[i] !== undefined && (s[i] === p[j] || p[j] === '.');
    if (p[j + 1] === '*') {
       ans = search(i, j + 2) || (firstMatch && search(i + 1, j));
    } else {
      ans =  firstMatch && search(i + 1, j + 1);
    }
    map.set(key, ans);
    return ans;
  }
  return search(0, 0);
};

var isMatch = function (s, p) {
  const slen = s.length, plen = p.length;
  const map = {};
  function search(i, j) {
    const key = i + '_' + j;
    let ans =  map[key];
    if (ans) {
      return ans;
    }
    if (j === plen) {
      return ans = i === slen;
    }

    const firstMatch = s[i] !== undefined && (s[i] === p[j] || p[j] === '.');
    if (p[j + 1] === '*') {
      ans = search(i, j + 2) || (firstMatch && search(i + 1, j));
    } else {
      ans = firstMatch && search(i + 1, j + 1);
    }
    return map[key] = ans;
  }
  return search(0, 0);
};

console.log(isMatch('aa', 'a'))
console.log(isMatch('aa', 'a*'))
console.log(isMatch('ab', '.*'))
console.log(isMatch('aab', 'c*a*b*'))

s = "mississippi"
p = "mis*is*p*."
console.log(isMatch(s, p))