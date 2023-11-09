# 95. Unique Binary Search Trees II
# 递归，1,2,3，i，4,5，以i为根节点，左边构造左子树列表，右边构造右子树列表
# 添加备忘录优化时间，测试用例不够大，节省时间不够多

from typing import List, Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def generateTrees(self, n: int) -> List[Optional[TreeNode]]:
        memo = {}
        def generateTree(left, right):
            if left > right:
                return [None]

            if (left, right) in memo:
                return memo[(left, right)]
            trees = []
            for i in range(left, right+1):
                left_subtree = generateTree(left, i-1)
                right_subtree = generateTree(i+1, right)

                for left_tree in left_subtree:
                    for right_tree in right_subtree:
                        trees.append(TreeNode(i, left_tree, right_tree))
            memo[(left, right)] = trees
            return trees


        return  generateTree(1, n)
