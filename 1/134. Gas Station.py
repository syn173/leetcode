# 134. Gas Station

"""
暴力枚举的方法，o(n^2)，考虑贪心的方法，重点便来到如何更新起点.
如果从某个加油站出发，油量在中途变为负数，这说明从这个加油站到变负的那个加油站之间的任一站都不能作为起点（因为油量会更少）。因此，应该从变负的下一个加油站重新开始计算。如果能回到起点，那么这个起点就是正确的起点。
贪心法的证明参见 https://leetcode.com/problems/gas-station/solutions/1706142/java-c-python-an-explanation-that-ever-exists-till-now/
"""

from typing import List

class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        size = len(gas)
        sum = 0
        periodSum = 0
        start = 0
        for i in range(size):
            delt = gas[i] - cost[i]
            sum += delt
            periodSum += delt

            if periodSum < 0:
                periodSum = 0
                start = i + 1

        if sum < 0:
            return -1

        return start