# 174. Dungeon Game

"""
首先很明确这是一道DP的题目，开始我的思路是正向的，可以把问题转化为找到一条路径，这条路径的累加和中最小值是最大的那个，取其相反数就是整个过程需要的最小损耗(如果都是正数说明一直加血直接1即可)，因为可以看作每次都从起点出发
所以维护了两个变量，pathSum[i,j]表示从起点到当前位置的总和，minSum[i,j]表示从起点到当前位置路径中的最小值，这样其实是不对的，因为pathSum[i,j]不能通过前面的pathSum或是minSum来转移过来(感觉有点复杂还没有完全证明)。
但是看过solution之后需要采用逆向思维从后往前推的思路挺清晰，保证一直存活即可

"""
from typing import List

class Solution:
    def calculateMinimumHP(self, dungeon: List[List[int]]) -> int:
        m = len(dungeon)
        n = len(dungeon[0])
        # 初始化外围加一层哨兵
        dp = [[1e10] * (n + 1) for j in range(m + 1)]
        dp[m - 1][n] = dp[m][n - 1] = 1
        for i in range(m - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                val = min(dp[i][j + 1], dp[i + 1][j]) - dungeon[i][j]
                dp[i][j] = 1 if val <= 0 else val

        return dp[0][0]



solution = Solution()
print(solution.calculateMinimumHP([
    [-2,-3,3],
    [-5,-10,1],
    [10,30,-5]]))

# print(solution.calculateMinimumHP([
#     [1,-3,3],
#     [0,-2,0],
#     [-3,-3,-3]]))


