# 135. Candy

"""
difficulty算不算hard的题目
注意第二个用例，如果一样高，是可以分配不一样的数量的，初始每人一块，然后逐个当满足条件时候分配+1即可，分别正向和逆向各一遍，注意逆向时nums的判断条件
"""

from typing import List

class Solution:
    def candy(self, ratings: List[int]) -> int:
        size = len(ratings)
        nums = [1] * size
        for i in range(1, size):
            if ratings[i] > ratings[i - 1]:
                nums[i] = nums[i - 1] + 1

        for i in range(size - 1, 0, -1):
            if ratings[i - 1] > ratings[i] and nums[i - 1] <= nums[i]:
                nums[i - 1] = nums[i] + 1

        return sum(nums)
