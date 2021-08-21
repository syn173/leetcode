/**
 * 递归处理，结果超时，加备忘录优化，还是超时
 * 优化2，去掉字符串的操作，递归参数改成索引，通过，但是耗时还是比较长
 * 测试，没有备忘录还是会超时
 * 优化3，用Map做备忘录，快了一丢丢
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const map = new Map();
  p = p.replace(/\*+/g, '*');
  return doMatch(s.length, p.length);

  function doMatch(si, pi) {
    const key = si + '-' + pi;
    let val = map.get(key);
    if (val !== undefined) {
      return val;
    }
    if (!pi) {
      val = !si;
      map.set(key, val);
      return val;
    }
    if (!si) {
      val = !pi || pi === 1 && p[0] === '*';
       map.set(key, val);
       return val;
    }
    const pSign = p[pi - 1],
      sSign = s[si - 1];
    if (pSign === "*") {
       val = doMatch(si - 1, pi) ||
        doMatch(si, pi - 1) ||
        doMatch(si - 1, pi - 1);
    } else if (pSign === "?") {
       val = doMatch(si - 1, pi - 1);
    } else {
       val = pSign === sSign && doMatch(si - 1, pi - 1);
    }
    map.set(key, val);
    return val;
  }
};
console.log(isMatch("zacabz", "*a?b*"));
// console.log(
//   isMatch(
//     "aaaabaaaabbbbaabbbaabbaababbabbaaaababaaabbbbbbaabbbabababbaaabaabaaaaaabbaabbbbaababbababaabbbaababbbba",
//     "*abc???de******b*aba***babaa*bbaba***a*aaba*b*aa**a*b**ba***a*a*"
//   )
// );
// console.log(
//   isMatch("bbbababbabbbbabbbbaabaaabbbbabbbababbbbababaabbbab", "a****b*")
// );
// console.log(isMatch("abcabczzzde", "*abc???de*"));
// console.log(isMatch("aa", "*"));
// console.log(isMatch("cb", "?a"));
// console.log(isMatch("adceb", "*a*b"));
// console.log(isMatch("acdcb", "a*c?b"));