# 164. Maximum Gap
"""
排序，如果按题目要求约束应该是桶排序的
"""

from typing import List

class Solution:
    def maximumGap(self, nums: List[int]) -> int:
        if len(nums) < 2:
            return 0
        nums.sort()

        maxGap = float('-inf')
        for i in range(1, len(nums)):
            maxGap = max(maxGap, nums[i] - nums[i - 1])

        # print(maxGap)
        return maxGap

solution = Solution()
solution.maximumGap([3,6,9,1])

"""
更简洁语法

"""

class SolutionFromTopSubmission:
    def maximumGap(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 0

        nums.sort()
        return max((nums[i + 1] - nums[i] for i in range(len(nums) - 1)))