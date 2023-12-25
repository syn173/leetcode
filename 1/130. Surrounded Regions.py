# 130. Surrounded Regions

"""
搜索题目，直接把所有O的范围都搜出来了，因为延展到边缘的是不会修改的，其实只要把这些的都找出来就行了
"""

from typing import List

class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        m = len(board)
        n = len(board[0])

        directArr = [(0, 1), (1, 0), (0, -1), (-1, 0)]

        def findSurroundArea(si, sj):
            visited = set()
            queue = [(si, sj)]
            visited.add((si, sj))
            res = []
            flag =  False
            while len(queue):
                pos = queue.pop(0)
                res.append(pos)
                if pos[0] == 0 or pos[0] == m - 1 or pos[1] == 0 or pos[1] == n - 1:
                    flag = True
                for direct in directArr:
                    nextI = pos[0] + direct[0]
                    nextJ = pos[1] + direct[1]
                    if nextI >= 0 and nextJ >=0 and nextI < m and nextJ < n and board[nextI][nextJ] == 'O' and not (nextI, nextJ) in visited:
                        visited.add((nextI, nextJ))
                        queue.append((nextI, nextJ))

            # print(flag, res)
            return (flag, res)

        def fillX(res, flag):
            for x, y in res:
                board[x][y] = 'X' if not flag else 'F'

        # findSurroundArea(1, 1)
        for i in range(m):
            for j in range(n):
                if board[i][j] == 'O':
                    flag, res = findSurroundArea(i, j)
                    fillX(res, flag)

        for i in range(m):
            for j in range(n):
                if board[i][j] == 'F':
                    board[i][j] = 'O'

        for row in board:
            print(row)

solution = Solution()
solution.solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]])

solution.solve([["O","O","O"],["O","O","O"],["O","O","O"]])

class SolutionFromTopSubmission:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """

        rows = len(board)
        cols = len(board[0])
        visited = set()

        def dfs(i, j):
            if i in range(rows) and j in range(cols) and board[i][j] == "O" and not ((i,j) in visited):
                visited.add((i,j))
                dfs(i + 1, j)
                dfs(i - 1, j)
                dfs(i, j + 1)
                dfs(i, j - 1)

        for i in range(rows):
            for j in range(cols):
                if i == 0 or i == rows - 1 or j == 0 or j == cols - 1:
                    dfs(i, j)

        for i in range(rows):
            for j in range(cols):
                if board[i][j] == "O" and not ((i,j) in visited):
                    board[i][j] = "X"

