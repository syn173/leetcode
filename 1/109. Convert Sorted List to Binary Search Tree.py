# 109. Convert Sorted List to Binary Search Tree
# 受上一题影响，先将链表转为了数组提交成功

"""
上一题总是从中间开始找值，属于先序遍历思维了。
前面也有题目提示过了，二叉搜索树的中序遍历就是有序的，所以通过中序遍历进行dfs即可
"""

from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def sortedListToBST(self, head: Optional[ListNode]) -> Optional[TreeNode]:
        nums = []
        while head:
            nums.append(head.val)
            head = head.next

        def build(left, right):
          if left > right:
              return None

          mid = (left + right) // 2

          return TreeNode(nums[mid], build(left, mid - 1), build(mid + 1, right))

        return build(0, len(nums) - 1)

# 中序遍历法
class SolutionFromOhterSubmission:
    def sortedListToBST(self, head: Optional[ListNode]) -> Optional[TreeNode]:

        n = 0
        temp = head

        while temp:
            n += 1
            temp = temp.next

        def dfs(start, end):
            if start > end:
                return None
            mid = (start + end) // 2
            left = dfs(start, mid - 1)
            node = TreeNode(self.head.val)
            self.head = self.head.next
            node.left = left
            node.right = dfs(mid + 1, end)

            return node

        self.head = head
        return dfs(0, n - 1)