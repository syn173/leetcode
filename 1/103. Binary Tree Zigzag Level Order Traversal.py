# 103. Binary Tree Zigzag Level Order Traversal
# 上一题目扩展，加个方向控制变量即可

from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        res = []
        cur = []
        queue = [root]
        direction = 1
        while len(queue):
            cur = []
            length = len(queue)
            for i in range(length):
                tr = queue.pop(0)
                if direction:
                    cur.append(tr.val)
                else:
                    cur.insert(0, tr.val)

                if tr.left:
                    queue.append(tr.left)
                if tr.right:
                    queue.append(tr.right)
            direction = 1 - direction
            res.append(cur)
        return res