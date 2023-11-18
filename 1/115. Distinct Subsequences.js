// 115. Distinct Subsequences
// dp(i, j)表示s[0,i]和t[0,j]的解，注意状态转移方程的定义

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const dp = [];
  m = s.length;
  n = t.length;
  if (m <= n) {
    return s === t ? 1 : 0;
  }
  dp[0] = Array(n).fill(0);
  dp[0][0] = s[0] === t[0] ? 1 : 0;
  for (let i = 1; i < m; ++i) {
    const jLen = Math.min(i + 1, n);
    dp[i] = Array(n).fill(0);
    dp[i][0] = dp[i - 1][0] + (s[i] === t[0] ? 1 : 0);
    for (let j = 1; j < jLen; ++j) {
      if (s[i] === t[j]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else if (dp[i - 1][j]) {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[m - 1][n - 1];
};

numDistinct('rabbb', 'rabb');

// rabbbit;
// rabbit;
