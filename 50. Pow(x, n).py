class Solution:
    def myPow(self, x: float, n: int) -> float:
        def recursive(x, n):
            if (n == 0):
                return 1

            res = recursive(x * x, n >> 1)
            return res * x if (n & 1) else res

        res = recursive(x, abs(n))
        return (1 / res if n < 0 else res)

solution = Solution()
print(solution.myPow(2.00000, -2))