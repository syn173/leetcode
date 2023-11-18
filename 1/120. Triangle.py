# 120. Triangle
# 简单dp，第一反应差点就去dfs，提示空间复杂度o(N)，从下往上走即可

from typing import List

class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        lv = len(triangle) - 1

        res = triangle[lv]
        lv -= 1
        while lv >= 0:
            for i in range(lv + 1):
                res[i] = triangle[lv][i] + min(res[i], res[i + 1])
            lv -= 1

        # print(res)
        return res[0]

solution = Solution()
solution.minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])