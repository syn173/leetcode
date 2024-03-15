# 2596. Check Knight Tour Configuration

from typing import List

class Solution:
    def checkValidGrid(self, grid: List[List[int]]) -> bool:
        if grid[0][0]:
            return False

        n = len(grid)
        sums = n * n

        stepPos = {}
        for i in range(n):
            for j in range(n):
                stepPos[grid[i][j]] = (i, j)

        # print(stepPos)
        def canJump(pre, next):

            deltA = abs(pre[0] - next[0])
            deltB = abs(pre[1] - next[1])
            # print(deltA, deltB)
            return deltA == 1 and deltB == 2 or deltB == 1 and deltA == 2

        for i in range(1, sums):
            if not canJump(stepPos[i], stepPos[i - 1]):
                # print(i, stepPos[i], stepPos[i - 1])
                return False

        return True

solution = Solution()
print(solution.checkValidGrid([[0,11,16,5,20],[17,4,19,10,15],[12,1,8,21,6],[3,18,23,14,9],[24,13,2,7,22]]))

# print(solution.checkValidGrid([[0,5,2],[3,7,8],[6,1,4]]))