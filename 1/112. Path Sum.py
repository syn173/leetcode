# 112. Path Sum
# dfs wrong了一次，注意叶子节点的判断条件

"""
不用新定义方法，可以更简洁代码的
"""

from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False

        flag = False

        def dfs(node, sum):
            nonlocal flag

            if flag or not node:
                return

            if not node.left and not node.right:
                if sum + node.val == targetSum:
                    flag = True
                return
            dfs(node.left, sum + node.val)
            dfs(node.right, sum + node.val)

        dfs(root, 0)

        return flag

#
class SolutionFromOtherSubmission:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False
        if not root.left and not root.right and targetSum == root.val:
            return True
        targetSum -= root.val
        return self.hasPathSum(root.left, targetSum) or self.hasPathSum(root.right, targetSum)