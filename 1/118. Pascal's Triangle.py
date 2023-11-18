# 118. Pascal's Triangle
# 杨辉三角，提交后rutime分数不高，应该是浪费在了内存开销上了，果然将cur一次初始完而不是一次次append后好多了

from typing import List

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        res = [[1]]
        for m in range(0, numRows - 1):
            cur = [1] * (m + 2)

            for i in range(m):
                cur[i + 1] = (res[m][i] + res[m][i + 1])

            res.append(cur)
        # print(res)
        return res

solution = Solution()
solution.generate(5)
