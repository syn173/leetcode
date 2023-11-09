# 102. Binary Tree Level Order Traversal
# 上一题的思路，bfs即可
"""
队列可以优化去掉list map fiter操作的
"""
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = []
        queue = [root]

        while len(queue):
            arr = queue.copy()
            nums = list(map(lambda x: x.val, filter(lambda x: x, arr)))
            if len(nums):
              res.append(nums)
            queue = []
            for t in arr:
                if t:
                    queue.append(t.left)
                    queue.append(t.right)

        # print(res)
        return res

# 参考
class SolutionFromSubmission:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []

        q = []
        q.append(root)
        res = []

        while len(q) > 0:
            cur_level = []
            for i in range(len(q)):
                curr = q.pop(0)

                cur_level.append(curr.val)
                if curr.left:
                    q.append(curr.left)
                if curr.right:
                    q.append(curr.right)
            res.append(cur_level)

        return res