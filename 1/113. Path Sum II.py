# 113. Path Sum II
# 同上一题，不过要保存路径，注意数组的引用问题

from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        res = []
        cur = []
        def dfs(root, sum):
            if not root:
                return
            cur.append(root.val)
            print(root.val, cur)
            if not root.left and not root.right and sum == root.val:
                res.append(cur)

            dfs(root.left, sum - root.val)
            dfs(root.right, sum - root.val)
            cur.pop()

        dfs(root, targetSum)
        return res