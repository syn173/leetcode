# 179. Largest Number
"""
关键是对数组进行自定义排序，注意处理前导零，因为排序过，主要判断第一个元素是否为0就可以的
"""

from typing import List
from functools import cmp_to_key


class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        def compare(a, b):
            if a == b:
                return 0

            newA = str(a) + str(b)
            newB = str(b) + str(a)
            return 1 if newA < newB else -1

        sort_key = cmp_to_key(compare)

        nums.sort(key = sort_key)

        # print(nums)
        i = 0
        while i < len(nums) and nums[i] == 0:
            i += 1
        return ''.join(str(num) for num in nums[i:]) if i < len(nums) else '0'

solution = Solution()
# solution.largestNumber([10,2, 3])

# solution.largestNumber([3,30,34,5,9])

solution.largestNumber([0, 0])