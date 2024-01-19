# 136. Single Number
"""
topci提示了bit-manipulation，异或运算
"""

from functools import reduce
from typing import List

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        return reduce(lambda x, y: x ^ y, nums, 0)