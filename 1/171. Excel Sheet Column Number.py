# 171. Excel Sheet Column Number
"""
进制转换，168题的逆操作，反过来就更简单些了
"""
class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        ans = 0
        flag = 1

        for letter in columnTitle[::-1]:
            ans += (ord(letter) - 64) * flag
            flag *= 26

        return ans

print(ord('Z') - 64)