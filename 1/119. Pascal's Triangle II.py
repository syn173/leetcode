# 119. Pascal's Triangle II
# 只返回某一层，要求空间复杂度o(N)，即只在一维数组情况下更新，维护一个前一个位置的值即可

from typing import List

class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        res = [1] * (rowIndex + 1)

        for m in range(rowIndex):
            t = 1
            for i in range(m):
                p = res[i + 1]
                res[i + 1] = res[i + 1] + t
                t = p
        # print(res)
        return res

solution = Solution()
solution.getRow(1)
solution.getRow(2)
solution.getRow(3)
solution.getRow(4)