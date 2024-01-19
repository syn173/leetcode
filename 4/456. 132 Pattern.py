# 456. 132 Pattern
"""
字节面试一面的题目，感觉难度有点大啊
关键点：通过栈来维护满足序列j、k的最大ak，然后去跟ai去做判断，为什么ak是满足条件的最大的，因为如果一直在入栈的话，一定是递减的序列，所以当出栈的时候，最后一个出栈的，就是小于aj的最大的
"""

from typing import List

class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        stack = []
        ak = float('-inf')
        for num in nums[::-1]:
            if ak > num:
                return True
            while stack and num > stack[-1]:
                ak = stack.pop()
            stack.append(num)
        return False

solution = Solution()
solution.find132pattern([1,2,3,4])