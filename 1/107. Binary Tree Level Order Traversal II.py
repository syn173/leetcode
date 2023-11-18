# 107. Binary Tree Level Order Traversal II
# bfs，基本是102一样，最后结果倒序

from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrderBottom(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return root
        res = []
        que = [root]
        while len(que):
            cur = []
            for i in range(len(que)):
                it = que.pop(0)
                if it.left:
                    que.append(it.left)
                if it.right:
                    que.append(it.right)
                cur.append(it.val)
            res.insert(0, cur)

        return res