# 121. Best Time to Buy and Sell Stock
# dp easy difficult，之前看到过该题的解法，不然不一定把它看成easy。
# 先求每天的差值，然后计算连续最大和

"""
参考其他的提交，可以不用预处理，一次循环就搞定的
贪心的想法，其实和上面预处理差不多的想法，对于考察的元素a[p],只要后面都比a[p]大，就可以一直计算，否则更新p索引(等同于累加和小于0了，更新当前值为0)
"""

from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        num = len(prices)

        for i in range(num - 1, 0, -1):
            prices[i] = prices[i] - prices[i - 1]
        prices[0] = 0

        maxP = 0
        for i in range(1, num):
            prices[i] = prices[i - 1] + prices[i]
            if prices[i] < 0:
                prices[i] = 0
            if prices[i] > maxP:
                maxP = prices[i]

        return maxP

class SolutionFromOtherSubmission:
    def maxProfit(self, prices: List[int]) -> int:

        # brute force
        # profit = 0
        # for i in range(len(prices) - 1):
        #     for j in range(i + 1, len(prices)):
        #         sell = prices[j] - prices[i]
        #         if sell > 0 and sell > profit: profit = sell
        # return profit

        idxCheapest = 0
        currentProfit = 0
        for i in range(1, len(prices)):
            if prices[i] < prices[idxCheapest]:
                idxCheapest = i
            elif prices[i] - prices[idxCheapest] > currentProfit:
                currentProfit = prices[i] - prices[idxCheapest]
        return currentProfit

