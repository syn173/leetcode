# 104. Maximum Depth of Binary Tree
# 更简单的bfs了，只统计层数，也可以dfs的，见参考

from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
      if not root:
          return 0
      depth = 0
      queue = [root]
      while len(queue):
          depth += 1
          for i in range(len(queue)):
              tr = queue.pop(0)
              if tr.left:
                  queue.append(tr.left)
              if tr.right:
                  queue.append(tr.right)

      return depth


# Using Recursive DFS
class SolutionFromOtherSubmission:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        res = 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
        return res




