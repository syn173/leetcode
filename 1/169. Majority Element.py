# 169. Majority Element
"""
本题难度为easy，解法多种，比较简单的是哈希，时间和空间复杂度是O(n)，排序的话是O(nlogn)，但是题目建议是线性时间+O(1)空间复杂度，这就有点难了
参考solution，发现是用到了摩尔投票算法（Moore's Voting Algorithm）

摩尔投票算法（Moore's Voting Algorithm），又称为博伊尔-摩尔多数投票算法（Boyer-Moore Majority Vote Algorithm），是一种在线算法，
用于在单次遍历输入数据流的过程中找到出现次数超过半数的元素，即所谓的“主元素”（majority element）。
这个算法是由 Robert Sedgewick 和 Jon Louis Bentley 于 1979 年提出，并因 Michael L. Fredman 和 J. Strother Moore 在 1980 年的工作而得名。

算法的基本思路是这样的：

1. 初始化两个变量：一个是计数器（count），初始化为 0；另一个是候选主元素（candidate），初始化为空。

2. 遍历输入序列的每一个元素：
   - 如果计数器为 0，则将当前元素作为候选主元素，并将计数器置为 1；
   - 如果当前元素与候选主元素相同，则将计数器加 1；
   - 否则，将计数器减 1。

3. 遍历结束后，候选主元素即为可能的主元素。由于算法的性质，如果序列中存在一个出现次数超过半数的元素，那么在遍历结束时，候选主元素将是正确的主元素。

这个算法之所以能够在单次遍历中完成任务，是因为它可以确保任何时候计数器非零时，候选主元素至少领先其他所有元素一次。
而在遍历完整个序列后，计数器非零的唯一情况就是在整个序列中有元素出现次数超过半数。如果序列中没有元素出现次数超过半数，则算法无法确定主元素。
"""

from typing import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = 0
        element = 0

        for num in nums:
            if count == 0:
                element = num
                count = 1
            elif element == num:
                count += 1
            else:
                count -= 1

        return element

