# 105. Construct Binary Tree from Preorder and Inorder Traversal
# 递归，为了节省空间使用索引做参数，一定要注意区间边界的值

from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        def build(pL, pR, iL, iR):
            if iL > iR or pL > pR:
                return None

            # print( pL, pR, iL, iR)
            val = preorder[pL]
            if pL == pR or iL == iR:
                return TreeNode(val)

            # print(preorder[pL: pR + 1], inorder[iL: iR + 1], val)
            index = inorder[iL: iR + 1].index(val) # index 用来定位中序中的位置以及先序中的数量

            return TreeNode(val, build(pL + 1, pL + index, iL, iL + index - 1), build(pL + index + 1, pR, iL + index + 1, iR))

        return build(0, len(preorder) - 1, 0, len(inorder) - 1)
