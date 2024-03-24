# 153. Find Minimum in Rotated Sorted Array
"""
二分查找
"""
from typing import List


class Solution:
    def findMin(self, nums: List[int]) -> int:
        def midSearch(left, right):
            if left >= right:
                return nums[right]
            mid = (left + right) >> 1

            if nums[mid] > nums[left] and nums[mid] < nums[right]:
                return nums[left]

            if nums[mid] > nums[right]:
                return midSearch(mid + 1, right)

            return midSearch(left, mid)

        return midSearch(0, len(nums) - 1)

"""
可以代码更简洁些
"""

class SolutionFromTopSubmission:
    def findMin(self, nums: List[int]) -> int:
        l,r=0,len(nums)-1
        if len(nums)==1:
            return nums[0]
        while l<r:
            mid = (l+r) //2
            if nums[mid]>nums[r]:
                l = mid+1
            else:
                r = mid
        return nums[l]

