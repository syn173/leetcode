# 122. Best Time to Buy and Sell Stock II

"""
计算每一个递增的和即可
举例
2 3 5 4 10
a   b c d
证明 如果b > c则b - a + d - c > d - a (b - a + d - c = d - a + b - c)

注意要处理中间的递减以及结尾的递增，for i in range()这里不好使，不能跳过索引
"""

"""
再看其他submission，用到上一题的 a3 - a2 + a2 - a1 = a3 - a1，
只要把相邻增加的累加起来就可以了，这么看这道题反而更像easy了吧
"""
from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        sum = 0
        start = 0
        num = len(prices)
        while start + 1 < num and prices[start] > prices[start + 1]:
            start += 1

        i = start + 1
        while i < num:
            if prices[i] < prices[i - 1]:
                # print(prices[i], prices[i - 1], prices[start])
                sum += prices[i - 1] - prices[start]
                start = i

                while start + 1 < num and prices[start] > prices[start + 1]:
                    start += 1
                # print(prices[start])
                i = start
            elif i == num - 1:
                # print(prices[i], prices[start])
                sum += prices[i] - prices[start]
            i += 1

        # print(sum)
        return sum

solution = Solution()
solution.maxProfit([3,2,6,5,0,3])

class SolutionFromTopSubmission:
    def maxProfit(self, prices: List[int]) -> int:
        result = 0

        for index in range(1, len(prices)):
            if prices[index] > prices[index-1]:
                result += (prices[index] - prices[index-1])

        return result
