# 139. Word Break

"""
直接对s进行分割回溯超时的，阶乘的时间复杂度了
dp的，和132题回文划分类似的

补充，用回溯也是可以，之前思路每理对，每次掐掉头部即可
"""
from functools import cache
from typing import List

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        size = len(s)
        wordMap = {}

        for word in wordDict:
            wordMap[word] = True

        # todo 增加一个长度下面循环可以少一个if
        dp = [False] * size

        for i in range(0, size):
            for j in range(0, i + 1):
                if s[j:i+1] in wordMap:
                    dp[i] = True if j == 0 else dp[j - 1]

                if dp[i]:
                    break

        print(dp)
        return dp[size - 1]

solution = Solution()
solution.wordBreak("applepenappleapple", ["apple","penapple"])
solution.wordBreak("apple", ["apple","penapple"])
solution.wordBreak("leetcode", ["leet","code"])
solution.wordBreak("a", ["a"])

class SolutionFromTopSubmission:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        @cache
        def helper(s):
            if len(s) == 0:
                return True
            for word in wordDict:
                if s.startswith(word):
                    if helper(s[len(word):]):
                        return True
            return False
        return helper(s)