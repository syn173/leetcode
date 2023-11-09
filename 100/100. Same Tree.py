# 100. Same Tree
# easy difficulty, dfs

from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        def dfs(a, b):
            if not a or not b:
                return a == b
            return a.val == b.val and dfs(a.left, b.left) and dfs(a.right, b.right)

        return dfs(p, q)