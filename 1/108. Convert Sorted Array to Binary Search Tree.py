# 108. Convert Sorted Array to Binary Search Tree
# easy difficulty，二分即可

from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        def build(left, right):
            if left > right:
                return None

            mid = (left + right) // 2

            return TreeNode(nums[mid], build(left, mid - 1), build(mid + 1, right))

        return build(0, len(nums) - 1)