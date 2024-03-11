# 149. Max Points on a Line
"""
组合 + 直线方程的表示(一般式/斜截式/两点式)
使用一般式表达比较简单，但是耗时太长，没有缓存的话有大量的重复计算
可优化为缓存任意两点间的直线表示，直接统计数量
"""

from typing import List
from itertools import combinations



class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        count = len(points)
        if count <= 2:
            return count

        combs = list(combinations(points, 2))
        # calced = set()
        ans = 0
        for comb in combs:
            x1, y1 = comb[0]
            x2, y2 = comb[1]
            a = y2 - y1
            b = x1 - x2
            c = x2 * y1 - x1 * y2

            sum = 0
            for (x, y) in points:
                if self.isOnLine(a, b, c, x, y):
                    sum += 1

            ans = max(ans, sum)
        return ans
    def isOnLine(self, a, b, c, x, y):
        return a * x + b * y + c == 0

"""
只要统计斜率就可以的
"""
from collections import defaultdict
class SolutionFromTopSubmission:
    def maxPoints(self, points: List[List[int]]) -> int:
        if len(points) <= 2:
            return len(points)
        def slope(p1, p2):
            if p2[0] - p1[0] == 0:
                return float("inf")
            return (p2[1]-p1[1]) / (p2[0] - p1[0])
        res = 0
        for i in range(len(points)):
            count = defaultdict(int)
            for j in range(i + 1, len(points)):
                count[slope(points[i], points[j])] += 1
            if count:
                res = max(res, max(count.values()))
        return res + 1

""" 借助三角公式 """
import math
class SolutionFromTopSubmission2:
    def maxPoints(self, points: List[List[int]]) -> int:

        n = len(points)
        if n==1:
            return 1
        sol = 2

        for i in range(1,n):
            xi,yi = points[i]
            count = defaultdict(int)
            for j in range(i):
                xj,yj = points[j]
                azimuth_vector_ij = math.atan2(yj-yi,xj-xi)
                count[azimuth_vector_ij] += 1
                azimuth_vector_ji = math.atan2(yi-yj,xi-xj)
                count[azimuth_vector_ji] += 1

            sol = max(sol,max(count.values())+1)
        return sol