# 85. Maximal Rectangle
"""
84题的升级版，把处理矩阵成84题的模型即可
"""
from typing import List


class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        maxArea = 0
        m, n = len(matrix), len(matrix[0])
        row = [0] * n

        for i in range(m):
            for j in range(n):
                row[j] = 0 if matrix[i][j] == '0' else row[j] + 1
            maxArea = max(maxArea, self.largestRectangleArea(row[::]))
        return maxArea

    def largestRectangleArea(self, heights: List[int]) -> int:
        heights.append(-1)

        stack = []
        maxArea = 0

        for i in range(len(heights)):
            while len(stack) and heights[i] < heights[stack[-1]]:
                left = stack.pop()
                width = i if not len(stack) else i - stack[-1] - 1
                maxArea = max(heights[left] * width, maxArea)

            stack.append(i)
        return maxArea
