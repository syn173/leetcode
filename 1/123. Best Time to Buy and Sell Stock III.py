# 123. Best Time to Buy and Sell Stock III
# 121题的加强，正着一趟，倒着一趟，分成两部分计算即可

"""
看提交还能一次循环搞定的，空间复杂度O(1)的，有点烧脑了
先让第一段满足递增，第二段的起点一定不能在第一段范围内的，可用不等式证明
假设两段为[a, b], [c, d]
p1 = b - a
res = p1 + d - c
    = d - (c - p1)
再维护一个 c - p1
见下面代码
"""

from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        res = 0
        num = len(prices)
        dp = [0] * num
        pre = 0
        for i in range(1, num):
            if prices[i] < prices[pre]:
                pre = i
            elif prices[i] - prices[pre] > res:
                res = prices[i] - prices[pre]
            dp[i] = res

        if res == 0:
            return res

        rightSum = 0
        nxt = num - 1
        for i in range(nxt - 1, 0, -1):
            if prices[nxt] < prices[i]:
                nxt = i
            elif prices[nxt] - prices[i] > rightSum:
                rightSum = prices[nxt] - prices[i]
                if rightSum + dp[i - 1] > res:
                    res = rightSum + dp[i - 1]

        return res

solution = Solution()
solution.maxProfit([1,2,3,4,5])

class SolutionFromTopSubmission:
    def maxProfit(self, prices: List[int]) -> int:
        trans1 = float('inf')
        trans2 = float('inf')
        profit1 = 0
        profit2 = 0
        for p in prices:
            if p < trans1:
                trans1 = p
            elif p - trans1 > profit1:
                profit1 = p - trans1
            if profit1>0 and p-profit1<trans2:
                trans2 = p-profit1
            elif profit1>0 and p-trans2>profit2:
                profit2 = p-trans2
        return profit2 if profit2 >0 else profit1