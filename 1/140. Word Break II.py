# 140. Word Break II

"""
因为要返回所有可能结果，标准回溯问题了
"""

from typing import List

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        res = []

        def dfs(path, s):
            if not s:
                res.append(" ".join(path))

            for word in wordDict:
                if s.startswith(word):
                    dfs(path + [word], s[len(word):])

        dfs([], s)

        return res