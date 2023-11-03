'''
91. Decode Ways
简单dp，状态转移方程依赖前两项，所以初始化要处理前两位长度
'''

class Solution:
    def numDecodings(self, s: str) -> int:

        if s[0] == '0':
            return 0
        length = len(s)
        dp = [1]
        if length == 1:
            return dp[0]

        if s[1] == '0':
            dp.append(0 if int(s[0]) > 2 else 1)
        elif int(s[0: 2]) <= 26:
            dp.append(2)
        else:
            dp.append(1)

        for i in range(2, length):
            if s[i] == '0':
                dp.append(0)
            else:
                dp.append(dp[i - 1])
            if 10 <= int(s[i - 1:i + 1]) <= 26:
                dp[i] += dp[i - 2]

        return dp[length - 1]