# 162. Find Peak Element

"""
二分查找，参考了solution,解体关键在于只要找到满足条件的解即可，拿到[mid]的值分别去与[mid - 1]和[mid + 1]比较，注意边界的判断
"""

from typing import List

class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if mid - 1 >= left and nums[mid] < nums[mid - 1]:
                right = mid - 1
            elif mid + 1 <= right and nums[mid] < nums[mid + 1]:
                left = mid + 1
            else:
                return mid

        return -1