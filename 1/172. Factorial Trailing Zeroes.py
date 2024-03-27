# 172. Factorial Trailing Zeroes
"""
经典算法初学题目，统计阶乘末尾0的个数，即统计因子5的数量
"""
class Solution:
    def trailingZeroes(self, n: int) -> int:
        cnt = 0
        while n:
            cnt += n
            n //= 5
        return cnt