# 166. Fraction to Recurring Decimal
"""
因为是两个整数相除，按照除法竖式来看，当小数部分余数出现重复时，必然是产生循环节的时候
"""

class Solution:
    def fractionToDecimal(self, numerator: int, denominator: int) -> str:
        if not numerator:
            return '0'
        res = []

        if (numerator > 0) ^ (denominator > 0):
            res.append('-')

        numerator = abs(numerator)
        denominator = abs(denominator)

        r = numerator % denominator

        res.append(str(numerator // denominator))

        if r == 0:
            return ''.join(res)

        rMap = {}
        res.append('.')
        while r != 0:
            if r in rMap:
                res.insert(rMap[r], '(')
                res.append(')')
                break

            rMap[r] = len(res)
            r *= 10
            res.append(str(r // denominator))
            r = r % denominator

        # print(''.join(res))
        return ''.join(res)


sol = Solution()

sol.fractionToDecimal(2, 7)