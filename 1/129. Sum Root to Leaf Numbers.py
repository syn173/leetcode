# 129. Sum Root to Leaf Numbers
"""
简单树的的遍历
"""

# Definition for a binary tree node.
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        sum = 0
        def track(root, num):
            nonlocal sum
            if not root:
                return

            nextNum = num * 10 + root.val
            if not root.left and not root.right:
                sum += nextNum

            track(root.left, nextNum)
            track(root.right, nextNum)

        track(root, 0)

        return sum