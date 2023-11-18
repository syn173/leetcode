# 106. Construct Binary Tree from Inorder and Postorder Traversal
# 上一题的变型，这次是中序和后序来构造一棵树(先序和后序是不能确定一颗树的)

"""
index 变量可以提前通过map缓存下来的，这里就不列了
另外还可以结合后续遍历的特点，参数只要iL和iR就够了的
"""

from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        def build(iL, iR, pL, pR):
            if iL > iR or pL > pR:
                return None

            val = postorder[pR]
            if iL == iR or pL == pR:
                return TreeNode(val)

            index = inorder[iL: iR + 1].index(val)

            return TreeNode(val, build(iL, iL + index - 1, pL, pL + index - 1), build(iL + index + 1, iR, pL + index, pR - 1))

        return build(0, len(inorder) - 1, 0, len(postorder) - 1)

class SolutionFromOhterSubmission:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        inorder_map={val:idx for idx, val in enumerate(inorder)}
        postorder_idx=len(postorder)-1

        def treeHelper(left, right):
            nonlocal postorder_idx
            if left>right:
                return None

            node_val = postorder[postorder_idx]
            root=TreeNode(node_val)
            postorder_idx-=1

            inorder_index=inorder_map[node_val]

            root.right = treeHelper(inorder_index+1, right) # 因为是后续，这里要先右后左
            root.left = treeHelper(left, inorder_index-1 )


            return root

        return treeHelper(0, len(inorder)-1)