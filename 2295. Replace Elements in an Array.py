# 2295. Replace Elements in an Array

from typing import List


class Solution:
    def arrayChange(self, nums: List[int], operations: List[List[int]]) -> List[int]:
        posMap = {}

        for i in range(len(nums)):
            posMap[nums[i]] = i

        for [a, b] in operations:
            t = posMap[a]
            nums[t] = b
            posMap[b] = t
            del posMap[a]

        return nums