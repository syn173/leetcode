
from typing import List

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        print(123)
        res = []
        def recursive(level):
            if level == len(nums):
                res.append(nums[::])
                return
            for i in range(0, level + 1):
                nums[i], nums[level] = nums[level], nums[i]
                recursive(level + 1)
                nums[level], nums[i] = nums[i], nums[level]
            return res

        recursive(nums)
        return res
