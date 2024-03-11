# 145. Binary Tree Postorder Traversal
# 简单后序遍历

# Definition for a binary tree node.
from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def traval(root):
            if not root:
                return
            traval(root.left)
            traval(root.right)
            res.append(root.val)

        traval(root)
        return res