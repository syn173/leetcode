# 111. Minimum Depth of Binary
# dfs

"""
更适合广搜的，第一次遇到没有孩子节点的层数即是结果
"""

from collections import deque
from typing import Optional
import sys


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        res = sys.maxsize

        def dfs(node):
            nonlocal res
            if not node:
                return 0

            left = dfs(node.left)
            right = dfs(node.right)

            if not left:
                cur = 1 + right
            elif not right:
                cur = 1 + left
            else:
                cur = 1 + min(left, right)

            res = min(res, cur)
            return cur

        return dfs(root)

# bfs
class SolutionFromOtherSubmission:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        q = deque()
        l = 0
        q.append(root)

        while q:
            c = len(q)
            l += 1
            print(l,[x.val for x in q])
            for i in range(c):
                n = q.popleft()
                if not n.left and not n.right:
                    return l
                if n.left:
                    q.append(n.left)
                if n.right:
                    q.append(n.right)
        return l
