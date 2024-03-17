# 87. Scramble String
"""
动态规划的题目，用递归实现需要加备忘录，否则会超时
dp[i][j][len] = (dp[i][j][k] && dp[i+k][j+k][len-k]) || (dp[i][j+len-k][k] && dp[i+k][j][len-k]) 其中1<=k<len

"""

class Solution:
    def __init__(self):
        self.note = {}

    def isScramble(self, s1: str, s2: str) -> bool:
        if (s1, s2) in self.note:
            return self.note[(s1,s2)]

        if s1 == s2:
            self.note[(s1,s2)] = True
            return True

        if sorted(s1) != sorted(s2):
            self.note[(s1,s2)] = False
            return False

        count = len(s1)
        for k in range(1, count):
            if self.isScramble(s1[0:k], s2[0: k]) and self.isScramble(s1[k:], s2[k:]) or self.isScramble(s1[0: k], s2[count - k:]) and self.isScramble(s1[k:], s2[0: count - k]) :
                self.note[(s1,s2)] = True
                return True

        self.note[(s1,s2)] = False
        return False


solution = Solution()
# solution.isScramble("aaaaa", "aaaaa")
# print(solution.isScramble("great", "rgeat"))
print(solution.isScramble("great", "rgeat"))