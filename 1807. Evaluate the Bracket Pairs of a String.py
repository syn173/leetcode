# 1807. Evaluate the Bracket Pairs of a String

from typing import List
import re

class Solution:
    def evaluate(self, s: str, knowledge: List[List[str]]) -> str:
        knowMap = {}

        for [key, value] in knowledge:
            knowMap[key] = value

        def repl(m):
            key = m.group(1)
            return knowMap[key] if key in knowMap else '?'

        return re.sub(r'\((\w+)\)', repl, s)

solution = Solution()
solution.evaluate("(name)is(age)yearsold", [["name","bob"],["age","two"]])
