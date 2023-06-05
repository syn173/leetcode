"""
算法设计在于会TLE，想不到可以优化的数据结构，尝试倒着循环后成功ac
"""
from typing import List

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        def jumpIt(pos) -> bool:
            for i in range(pos - 1, -1, -1):
                if nums[i] >= pos - i:
                    return True
            return False

        for i in range(len(nums) - 1, 0, -1):
            if not jumpIt(i):
                return False

        return True