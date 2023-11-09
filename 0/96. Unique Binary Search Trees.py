# 96. Unique Binary Search Trees
# 简单dp，直接递归TLE了，添加备忘录

class Solution:
    def numTrees(self, n: int) -> int:
        dict = {}
        def dp(left, right):
            if left >= right:
                return 1

            print(left, right, dict)
            if (left, right) in dict:
                return dict[(left, right)]

            res = 0
            for i in range(left, right+1):
                res += dp(left, i-1)*dp(i+1, right)

            dict[(left, right)] = res
            return res

        return dp(1, n)

solution = Solution()
print(solution.numTrees(19))