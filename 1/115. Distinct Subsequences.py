# 115. Distinct Subsequence
# 注意二维数组的初始化问题

class Solution:
    def numDistinct(self, s: str, t: str) -> int:
      m = len(s)
      n = len(t)

      if n >= m:
        return 1 if s == t else 0

      dp = [[0] * n for _ in range(m)]
      dp[0][0] = 1 if s[0] == t[0] else 0
      for i in range(1, m):
        dp[i][0] = dp[i - 1][0] + (1 if s[i] == t[0] else 0)
        for j in range(1, min(i + 1, n)):
          if s[i] == t[j]:
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
          else:
            dp[i][j] = dp[i - 1][j]

      return dp[m - 1][n - 1]

solution = Solution()
solution.numDistinct('rabbbit', 'rabbit')