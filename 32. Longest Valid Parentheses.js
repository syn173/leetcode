/**
 * @param {string} s
 * @return {number}
 */
/* from leet code solution3, Time: o(n) Memory: o(n) */
var longestValidParentheses1 = function (s) {
  const stack = [-1], len = s.length;
  let max = 0, k = 1;
  for(let i = 0; i < len; ++i) {
    if (s[i] === '(') {
      stack[k++] = i;
    } else {
      --k;
      if (k === 0) {
        stack[k++] = i;
      } else {
        max = Math.max(max, i - stack[k-1])
      }
    }
  }
  return max;
};

/* from leet code solution2, Dynamic Programming; Time: o(n) Memory: o(n) */
var longestValidParentheses = function (s) {
  const dp = [0], len = s.length;
  let max = 0;
  for (let i = 1; i < len; ++i) {
    if (s[i] === '(') {
      dp[i] = 0;
    } else if (s[i-1] === '('){
      dp[i] = (dp[i-2] || 0) + 2;
    } else if (s[i - dp[i - 1] - 1] === '(') {
      dp[i] = (dp[i - 1] || 0) + (dp[i - dp[i - 1] - 2] || 0) + 2;
    } else {
      dp[i] = 0;
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};

// console.log(longestValidParentheses('(()'));
// console.log(longestValidParentheses(')()())'));
//console.log(longestValidParentheses("()(())"));
//console.log(longestValidParentheses("(()())"));
console.log(longestValidParentheses(")()())"))
// "((((()())()())))"
//