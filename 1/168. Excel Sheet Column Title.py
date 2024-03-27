# 168. Excel Sheet Column Title
"""
进制转换，注意从1开始而不是0开始
"""
class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        res = ''

        def getAlpha(num):
            if num == 0:
                return 'Z'
            return chr(num + ord('A') - 1)

        while columnNumber > 26:
            num = columnNumber % 26
            res = getAlpha(num) + res
            columnNumber //= 26
            if num == 0:
                columnNumber -= 1

        return getAlpha(columnNumber) + res

solution = Solution()
# solution.convertToTitle(26)
solution.convertToTitle(27)
solution.convertToTitle(28)
solution.convertToTitle(701)
solution.convertToTitle(52)


"""
正解，每次先减1即可
"""
class SolutionFromTopSubmission:
    def convertToTitle(self, columnNumber: int) -> str:
        # columnNumber -= 1
        m = {ord(key) - ord('a'):key for key in "abcdefghijklmnopqrstuvwxyz"}
        answer = ''
        while columnNumber:
            columnNumber -= 1
            columnNumber, mod = divmod(columnNumber, 26)
            answer += m[mod].upper()
        return answer[::-1]
