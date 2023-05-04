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

        def recursive(cnt, s, e):
            if cnt == n:
                res.append([''.join(chessboard[i]) for i in range(n)])
                return

            for i in range(s, n):
                for j in range(e if i == s else 0, n):
                    if canHold(i, j):
                        chessboard[i][j] = 'Q'
                        qList.append((i, j))

                        recursive(cnt + 1, i, j)
                        chessboard[i][j] = '.'
                        qList.remove((i, j))


        def canHold(i, j):
            if chessboard[i][j] == 'Q':
                return False
            # print('can', i, j, qList)
            for pos in qList:
                if abs(pos[0] - i) == abs(pos[1] - j) or (pos[0] == i) or (pos[1] == j):
                    return False
            return True

        recursive(0 ,0 ,0)
        print(res)
        return res


solution = Solution()
solution.solveNQueens(4)