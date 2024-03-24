# 154. Find Minimum in Rotated Sorted Array II
"""
跟上一题不同的点是可能有重复元素，主要处理如果mid位置跟两端相等情况，这里粗糙的分两块递归，也是通过了
"""

from typing import List


class Solution:
    def findMin(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1

        while left < right:
            mid = (left + right) // 2
            # print(mid)
            if nums[mid] > nums[left] and nums[mid] < nums[right]:
                return nums[left]
            if nums[mid] > nums[right]:
                left = mid + 1
            elif nums[mid] < nums[right]:
                right = mid
            else:
                return min(self.findMin(nums[left:mid + 1]), self.findMin(nums[mid + 1:]))

        return nums[left]

solution = Solution()
solution.findMin([1, 1])