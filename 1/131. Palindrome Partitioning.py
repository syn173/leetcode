# 131. Palindrome Partitioning
"""
首先想到暴力dp，有了n-1的结果后，拿s[n]去跟前面每一个去组合便产生了新的结果，
提交后超时了，因为这样会产生重复的生成，没有找到比较好的去重方法
去solution里去看，都是回溯的解决方案，而且gpt还特意回答了说【这是一个典型的回溯算法问题】
"""

from typing import List

# from chatgpt
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        def isPalindrome(sub: str) -> bool:
            return sub == sub[::-1]

        def backtrack(start=0, path=[]):
            if start == len(s):
                result.append(path[:])
                return
            for i in range(start, len(s)):
                if isPalindrome(s[start:i+1]):
                    path.append(s[start:i+1])
                    backtrack(i+1, path)
                    path.pop()

        result = []
        backtrack()
        return result

class Solution_TLE:
    def partition(self, s: str) -> List[List[str]]:
        length = len(s)
        res = [[s[0]]]
        dp = [[False] * (length + 1) for i in range(length + 1)]


        for i in range(length):
            dp[i][0] = True
            dp[i][1] = True

        for i in range(1, length):
            for j in range(2, i + 2):
                if s[i] == s[i - j + 1] and dp[i - 1][j - 2]:
                    dp[i][j] = True


            for j in range(len(res)):
                ks = s[i]
                cur = res.pop(0)
                res.append(cur + [ks])

                for k in range(len(cur) - 1):
                    ks += cur.pop()
                    if dp[i][len(ks)] and not (cur + [ks] in res):
                        res.append(cur + [ks])

            if dp[i][i + 1]:
                res.append([s[0: i + 1]])

            # print(res)
        return res

solution = Solution()
# solution.partition('aab')
solution.partition('aaddd')
# solution.partition('bbbbbb')