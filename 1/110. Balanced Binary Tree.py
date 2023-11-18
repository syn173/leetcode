# 110. Balanced Binary Tree
# dfs 后续遍历

from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True

        flag = True

        def dfs(node):
            nonlocal flag

            if not node or not flag:
                return 0

            left = dfs(node.left)
            right = dfs(node.right)

            # print(node.val, left, right)

            if abs(left - right) > 1:
                flag = False

            return 1 + max(left, right)


        dfs(root)

        return flag
