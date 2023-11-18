# 124. Binary Tree Maximum Path Sum

# 一会儿把问题看的太简单，一会儿有想的太复杂，
# 总体没那么难得吧，提交wrong了五次，全靠用例前行了
# 思路是dfs计算单边的最大值，然后比较几种可能得路径即可max(res, leftVal, rightVal, root.val, root.val + leftVal + rightVal)
# 有纯负数情况，注意初始化，注意细节，算不上hard难度吧，放以前竞赛里也就中档偏下吧

from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        res = root.val

        def dfs(root):
            nonlocal res

            if not root:
                return 0

            leftVal = dfs(root.left)
            rightVal = dfs(root.right)
            cur =  root.val + max(0, leftVal, rightVal)
            res = max(res, cur, root.val + leftVal + rightVal)

            return cur

        dfs(root)

        return res