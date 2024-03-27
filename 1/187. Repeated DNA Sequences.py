# 187. Repeated DNA Sequences
""" hash """

from collections import defaultdict
from typing import List

class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        if len(s) < 10:
            return []

        res = []
        dmap = defaultdict(int)

        for i in range(9, len(s)):
            s10 = s[i - 9:i + 1]
            if dmap[s10]:
                res.append(s10)

            dmap[s10] += 1

        return list(set(res))