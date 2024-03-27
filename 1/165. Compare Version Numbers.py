# 165. Compare Version Numbers
"""
版本号比较
"""

class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        v1 = list(map(lambda x: int(x), version1.split('.')))
        v2 = list(map(lambda x: int(x), version2.split('.')))

        delt = len(v2) - len(v1)

        if delt < 0:
            v2 += [0] * (-delt)
        elif delt > 0:
            v1 += [0] * delt

        for i in range(len(v1)):
            if v1[i] != v2[i]:
                return 1 if v1[i] > v2[i] else -1

        return 0