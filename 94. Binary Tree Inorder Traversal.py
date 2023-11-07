# 94. Binary Tree Inorder Traversal
# 二叉树中序遍历

# Definition for a binary tree node.
from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        list = []
        def travel(node):
            if node:
                travel(node.left)
                list.append(node.val)
                travel(node.right)
        travel(root)
        return list