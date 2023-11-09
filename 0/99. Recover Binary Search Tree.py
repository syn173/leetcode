# 99. Recover Binary Search Tree
# 沿用上一题中序遍历的规律，相当于是在有序数组中找到两个错位的节点，找到后将他们的值交换即可
# 注意相邻两个交换的情况

"""
结果判定有点迷，去掉了个cur的变量，耗时和内存竟然还增加了
"""

from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def recoverTree(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """

        pre = None

        left = None
        right = None
        tmpLeft = None

        def dfs(root):
            nonlocal pre, left, right, tmpLeft

            if not root or (left and right):
                return

            dfs(root.left)

            if  pre and root.val < pre.val:
                if not left:
                    left = pre
                    tmpLeft = root
                else:
                    right = root

            pre = root

            dfs(root.right)

        dfs(root)
        if not right:
            right = tmpLeft

        # print(left, right)
        t = left.val
        left.val = right.val
        right.val = t
