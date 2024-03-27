# 167. Two Sum II - Input Array Is Sorted
"""
跟第一题一样的，题目做了排序，可以二分，但是哈希比二分更快
"""
from typing import List

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        pindex = {}

        for i in range(len(numbers)):
            right = target - numbers[i]

            if right in pindex:
                return [i + 1, pindex[right] + 1]

            pindex[numbers[i]] = i

        return []