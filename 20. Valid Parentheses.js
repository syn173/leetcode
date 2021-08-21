/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) {
    return true;
  }
  const stack = [s[0]], slen = s.length, mp = {'}': '{', ')': '(', ']': '['};
  for(let i = 1; i < slen; ++i) {
    if (stack.length && mp[s[i]] == stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i])
    }
  }
  //console.log('stack', !stack.length);
  return !stack.length;
};

isValid("()");
isValid("()[]{}");
isValid("(]");
isValid("([)]")
isValid("{[]}")