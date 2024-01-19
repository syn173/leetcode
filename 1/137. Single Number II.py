# 137. Single Number II

"""
https://leetcode.com/problems/single-number-ii/solutions/3714928/bit-manipulation-c-java-python-beginner-friendly/
第三种魔性解法确实想不出来,
注意第二种解法适合c++这种32位int的，因为有负数的情况，否则需要做一次转化带符号32位整型
"""
from functools import reduce
from typing import List



class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        ans = 0

        for i in range(32):
            sum = 0
            for num in nums:
                sum += 1  & num >> i
            sum %= 3
            ans |= sum << i

        def to_32_bit_integer(num):
            num = num & 0xFFFFFFFF
            return num if num < 0x80000000 else num - 0x100000000

        return to_32_bit_integer(ans)


# magic solution from chatgpt
def singleNumber(nums):
    one, two = 0, 0
    for num in nums:
        one = ~two & (one ^ num)
        two = ~one & (two ^ num)
    return one

# Test the function with an example
print(singleNumber([2,2,3,2]))  # Output: 3
