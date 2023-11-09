# 98. Validate Binary Search Tree
# 开始没有理解好二叉搜索树的定义，直接dfs用左小右大去判，错了几次
# 问题核心在于满足条件的数进行中序遍历是有序的数组，即在中序遍历过程中维护先后元素进行判断即可

"""
参考了submission后还可以维护此次递归的最大最小值，注意分别更新的时机。
前几次错误的提交就是这个最大最小方式没整明白
"""

from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True

        flag = True
        cur = None
        pre = None

        def dfs(root):
            nonlocal flag
            nonlocal cur
            nonlocal pre

            if not flag:
                return

            if not root:
                return
            dfs(root.left)

            if cur != None:
                pre = cur
            cur = root.val

            if pre != None and pre > cur:
                flag = False
                return
            dfs(root.right)

        dfs(root)
        return flag
