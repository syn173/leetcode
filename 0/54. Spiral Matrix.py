"""
模拟题，算好圈数，逐层往里输出即可，注意最后一圈的特殊情况，要及时退出
"""
from typing import List

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        iLen = len(matrix)
        jLen = len(matrix[0])
        count = (min(iLen, jLen) + 1) // 2

        res = []
        for turn in range(0, count):
            i = turn
            j = turn

            while j < jLen - turn:
                res.append(matrix[i][j])
                j += 1

            j -= 1
            i += 1

            if i >= iLen - turn:
                break

            while i < iLen - turn:
                res.append(matrix[i][j])
                i += 1
            i -= 1
            j -= 1

            if j < turn:
                break

            while j >= turn:
                res.append(matrix[i][j])
                j -= 1

            j += 1
            i -= 1

            if (i <= turn):
                break

            while i > turn:
                res.append(matrix[i][j])
                i -= 1

        # print(res)
        return res

solution = Solution()
# solution.spiralOrder([[1,2,3],[4,5,6],[7,8,9]])
# solution.spiralOrder([[1,2,3],[4,5,6],[7,8,9],[10, 11, 12]])
# solution.spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])
# solution.spiralOrder([[7],[9],[6]])
solution.spiralOrder([[1,2,3,4]])
