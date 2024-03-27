# 198. House Robber
"""
dp 动态规划，分别计算第i天抢与不抢的情况，可以省下dp数组的空间，只用两个变量维护的
"""

from typing import List

class Solution:
    def rob(self, nums: List[int]) -> int:
        cnt = len(nums)
        if cnt < 2:
            return nums[0]

        dp = [[0, 0] for i in range(cnt)]
        dp[0][0] = 0
        dp[0][1] = nums[0]

        for i in range(1, cnt):
            dp[i][0] = max(dp[i - 1][0], dp[i - 1][1])
            dp[i][1] = dp[i - 1][0] + nums[i]

        return max(dp[cnt - 1][0], dp[cnt - 1][1])