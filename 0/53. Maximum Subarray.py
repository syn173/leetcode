"""
查看solution获得解题思路
很多说这个是dp的不对，这是一道贪心法
保证子序列最大的话，起点一定是正数(排除全是负数的情况)
从起点开始累计求和，如果总和小于了0，这一段一定是可以放弃然后重新开始
"""

from math import inf
from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        sum = 0
        res = -inf
        for num in nums:
            sum += num
            res = max(res, sum)
            if (sum < 0):
              sum = 0

        return res

solution = Solution()
print(solution.maxSubArray([1, -1, -9, 2]))