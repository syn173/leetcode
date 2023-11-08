# 97. Interleaving String
# 动态规划，递归实现，需要备忘录加速，否则TLE

from functools import cache


class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        if not s1:
            return s2 == s3
        if not s2:
            return s1 == s3

        if len(s1) + len(s2)!= len(s3):
            return False

        memo = {}

        def dp(i, j, k):
            b1 = False
            b2 = False
            if (i, j, k) in memo:
                return memo[(i, j, k)]
            if k == len(s3) and i == len(s1) and j == len(s2):
                return True

            if i < len(s1) and s1[i] == s3[k]:
                b1 = dp(i+1, j, k+1)

            if j < len(s2) and s2[j] == s3[k]:
                b2 = dp(i, j+1, k+1)

            memo[(i, j, k)] = b1 or b2
            return memo[(i, j, k)]



        return dp(0, 0, 0)


"""
参考了submission，可以节省掉k，另外直接注解加备忘录的实现
"""
def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
    if len(s1) + len(s2) != len(s3):
        return False

    @cache
    def dp(i, j):
        k = i + j
        if i == len(s1):
            return s2[j:] == s3[k:]
        if j == len(s2):
            return s1[i:] == s3[k:]
        return s1[i] == s3[k] and dp(i + 1, j) or s2[j] == s3[k] and dp(i, j + 1)

    return dp(0, 0)