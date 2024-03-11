# 144. Binary Tree Preorder Traversal
# 简单先序遍历

# Definition for a binary tree node.
from typing import Optional, List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def traval(root):
            if not root:
                return
            res.append(root.val)
            traval(root.left)
            traval(root.right)

        traval(root)
        return res