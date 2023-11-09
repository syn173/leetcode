"""
1A
简单回溯法，同51题，只是输入结果不同
"""

from typing import List

class Solution:
    def totalNQueens(self, n: int) -> int:
        chessboard = [['.' for row in range(n)] for col in range(n) ]
        qList = []
        cnt = 0

        def recursive(i):
            nonlocal cnt
            if i == n:
                cnt += 1
                return

            for j in range(0, n):
                if canHold(i, j):
                    chessboard[i][j] = 'Q'
                    qList.append((i, j))

                    recursive(i + 1)
                    chessboard[i][j] = '.'
                    qList.remove((i, j))


        def canHold(i, j):
            for pos in qList:
                if abs(pos[0] - i) == abs(pos[1] - j) or (pos[0] == i) or (pos[1] == j):
                    return False
            return True

        recursive(0)
        # print(cnt)
        return cnt


solution = Solution()
solution.totalNQueens(4)
