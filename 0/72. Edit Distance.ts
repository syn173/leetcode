/**
 * 动态规划题目，参考了solution，定义好dp[i][j]表示 子串word1[0, i-1]和word2[0, j-1]的解，便好找到状态转移方程了
 */
function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  const dp: number[][] = [[], []];
  for (let i = 0; i <= n; ++i) {
    dp[0][i] = i;
  }
  let step = 1;
  for (let i = 1; i <= m; ++i, step = 1 - step) {
    dp[step][0] = i;
    for (let j = 1; j <= n; ++j) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        dp[step][j] = dp[1 - step][j - 1];
      } else {
        dp[step][j] =
          Math.min(dp[1 - step][j - 1], dp[step][j - 1], dp[1 - step][j]) + 1;
      }
    }
  }
  return dp[1 - step][n];
}

console.log(minDistance('horse', 'ros'));
