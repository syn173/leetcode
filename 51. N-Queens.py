"""
1A
简单回溯法
"""

from typing import List

class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        chessboard = [['.' for row in range(n)] for col in range(n) ]
        res = []
        qList = []

        def recursive(i):
            if i == n:
                res.append([''.join(chessboard[a]) for a in range(n)])
                return

            for j in range(0, n):
                if canHold(i, j):
                    chessboard[i][j] = 'Q'
                    qList.append((i, j))

                    recursive(i + 1)
                    chessboard[i][j] = '.'
                    qList.remove((i, j))


        def canHold(i, j):
            if chessboard[i][j] == 'Q':
                return False
            for pos in qList:
                if abs(pos[0] - i) == abs(pos[1] - j) or (pos[0] == i) or (pos[1] == j):
                    return False
            return True

        recursive(0)
        print(res)
        return res


solution = Solution()
solution.solveNQueens(4)

"""
可优化点： qList可分开横轴和纵轴两个列表存储，因为行列的存储值肯定不会重复，同行或同列只要判断是否在数组中即可
"""