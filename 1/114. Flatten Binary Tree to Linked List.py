# 114. Flatten Binary Tree to Linked List

# 先序遍历处理成全右子树的链表结构，首先想到了头结点，提交后时间空间成绩都挺低的
# 即可以去掉头结点
"""
参考下面其他提交的解法，右子树的指针是不需要修正的，只要将所有左子树修正即可
"""

from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        head = TreeNode(0, None, root)

        def dfs(root):
            nonlocal head

            if not root:
                return
            tmpRight = root.right
            tmpLeft = root.left
            head.right = root
            head.left = None
            head = head.right

            dfs(tmpLeft)
            dfs(tmpRight)

        dfs(root)

# dfs
class SolutionFromOtherSubmission:
    def flatten(self, root: Optional[TreeNode]) -> None:

        def dfs(node):
            if not node:
                return None

            if node.left:
                hold = node.right
                node.right = node.left
                node.left = None
                dfs(node.right)

                while node.right:
                    node = node.right

                node.right = hold

            dfs(node.right)

        dfs(root)
