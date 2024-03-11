# 143. Reorder List
# Definition for singly-linked list.
from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        stack = []
        pt = head
        while pt:
            stack.append(pt)
            pt = pt.next

        count = len(stack)
        if count <= 2:
            return head

        pt = head
        for i in range(0, count >> 1):
            node = stack.pop()
            stack[-1].next = None
            t = pt.next
            pt.next = node
            node.next = t
            pt = t

        return head


# 使用双指针，先将原链表分成两部分
class SolutionFromTopSubmission:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """

        # find second half of the list
        slow = fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # reverse second half of the list
        prev, curr = None, slow

        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp

        # pt = prev
        # while pt:
        #     print(pt.val)
        #     pt = pt.next

        # merge the two lists
        first, second = head, prev
        while second.next:
            tmp1, tmp2 = first.next, second.next
            first.next = second
            second.next = tmp1
            first = tmp1
            second = tmp2

        return head