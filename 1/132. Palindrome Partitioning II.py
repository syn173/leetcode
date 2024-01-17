# 132. Palindrome Partitioning II
"""
按照上一题的解法指数级肯定是超时了，然后改成备忘录的分治，也是超时，正解是dp的，同时借助上一题回文子串的处理，
另外回文子串的处理可以将空间复杂度降低到o(n)，参考 https://leetcode.com/problems/palindrome-partitioning-ii/solutions/42198/my-solution-does-not-need-a-table-for-palindrome-is-it-right-it-uses-only-o-n-space/

"""

class Solution:
    def minCut(self, s: str) -> int:
        num = len(s)
        pal = [[False] * num for row in range(num)]
        cnt = [0] * num
        for i in range(num):
            cnt[i] = i

        for i in range(1, num):
            for j in (range(0, i + 1)):
                if s[i] == s[j] and (i - 1 < j + 1 or pal[i - 1][j + 1]):
                    pal[i][j] = True
                    cnt[i] = 0 if j == 0 else min(cnt[i], cnt[j - 1] + 1)

        return cnt[num - 1]

solution = Solution()
print(solution.minCut('aab'))
print(solution.minCut('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'))

