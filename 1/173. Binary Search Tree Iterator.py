# 173. Binary Search Tree Iterator
"""
非递归的中序遍历实现，借助于栈
"""

# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class BSTIterator:
    def __init__(self, root: Optional[TreeNode]):
        current = root
        self.stk = []
        while current:
            self.stk.append(current)
            current = current.left

    def next(self) -> int:
        res = self.stk.pop()

        current = current.right
        while current:
            self.stk.append(current)
            current = current.left

        return res.val


    def hasNext(self) -> bool:
        return self.stk



# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()