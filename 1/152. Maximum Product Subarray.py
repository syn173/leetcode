# 152. Maximum Product Subarray
"""
dp, o(n)，维护好到当前的一个正负数最大值
"""
from typing import List


class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        res = nums[0]
        maxPositive = res if res > 0 else 0
        maxNegitive = res if res < 0 else 0

        for num in nums[1:]:

            if num > 0:
                maxPositive, maxNegitive = max(maxPositive * num, num), maxNegitive * num
            elif num == 0:
                maxPositive = maxNegitive = 0
            else:
                maxPositive, maxNegitive = maxNegitive * num,  min(maxPositive * num, num)
                # print(num, 'end', maxNegitive, maxPositive)
            res = max(res, maxPositive)
        return res

solution = Solution()
# solution.maxProduct([2,3,-2,4, 6,6,-6])

solution.maxProduct([-3,-1,-1])

"""
可以进一步简化解法

"""
class SolutionFromTopSubmission:
    def maxProduct(self, nums: List[int]) -> int:
        ans, mx, mn = max(nums), nums[0], nums[0]

        for x in nums[1:]:
            tmp_max, tmp_min = mx, mn
            mn = min(x, mn * x, tmp_max * x)
            mx = max(x, mx * x, tmp_min * x)

            ans = max(ans, mx, mn)

        return ans