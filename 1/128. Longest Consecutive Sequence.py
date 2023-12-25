# 128. Longest Consecutive Sequence
"""
注意重复元素的处理
题目提示要o(n)的时间复杂度，怎么想也做不到，因为如果加hash，也相当于是o(nlogn)
索性直接先排序，结果成绩超过99%，进一步优化的话就是用set做一遍去重sortedNums = sorted(list(set(nums)))
"""

from typing import List

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        length = len(nums)
        if length == 0:
            return 0
        nums.sort()
        # print(nums)
        ans = 1
        i = 0
        while i < length:
            nextI = i + 1
            count = 1
            while nextI < length and nums[nextI] <= 1 + nums[nextI - 1]:
                if nums[nextI] == 1 + nums[nextI - 1]:
                    count += 1
                nextI += 1

            if count > ans:
                ans = count

            i = nextI

        # print(ans)
        return ans

solution = Solution()
solution.longestConsecutive([100,4,200,1,3,2])
# solution.longestConsecutive([0,3,7,2,5,8,4,6,0,1])
solution.longestConsecutive([1,2,0,1])