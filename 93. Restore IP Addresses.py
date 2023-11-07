# 93. Restore IP Addresses
# 简单递归
# 时间复杂度：O(n^4)，其中 n 是字符串 s 的长度。
# 空间复杂度：O(n)，其中 n 是字符串 s 的长度。

"""
看other submission也可以用四层for循环,也挺好理解的
"""

from typing import List

class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        length = len(s)
        res = []
        cur = []
        def travel(start, level):
            if level == 0 or start == length:
                if level ==0 and start == length:
                    res.append('.'.join(cur))
                return
            # print(s[start])
            cur.append(s[start])
            travel(start + 1, level - 1)
            cur.pop()

            if s[start] == '0':
                return

            for i in [2, 3]:
                if start + i <= length and int(s[start:start + i]) <= 255:
                    cur.append(s[start:start + i])
                    travel(start + i , level - 1)
                    cur.pop()

        travel(0, 4)
        return res


solution = Solution()
solution.restoreIpAddresses("25525511135")