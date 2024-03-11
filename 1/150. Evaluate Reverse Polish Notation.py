# 150. Evaluate Reverse Polish Notation
"""
简单栈处理，这里偷懒用了eval比较耗时
"""
from typing import List

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        opts = ["+", "-", "*", "/"]
        for token in tokens:
            if token in opts:
                a = stack.pop()
                b = stack.pop()
                # print('a, b', a, b)
                stack.append(int(eval(str(b) + token + str(a))))
            else:
                stack.append(token)

        return int(stack[0])


solution = Solution()
print(solution.evalRPN(["4","13","5","/","+"]))

