# generate by tongyi lingma
class Solution:
    def grayCode(self, n: int) -> List[int]:
        """
        格雷码序列 是一个由 2n 个整数组成的序列，其中：
        每个整数都在范围 [0, 2n - 1] 内（含 0 和 2n - 1）
        第一个整数是 0
        一个整数在序列中出现 不超过一次
        每对 相邻 整数的二进制表示 恰好一位不同 ，且
        """
        res = [0]
        for i in range(1, n+1):
            for j in range(len(res)-1, -1, -1):
                res.append(res[j] | (1<<(i-1)))
        return res