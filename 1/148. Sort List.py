# 148. Sort List
"""
链表排序，不能用上一题插入排序，会超时，需要nlogn复杂度的
"""

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:

        cur = head
        arr = []
        while cur:
            arr.append(cur.val)
            cur = cur.next

        arr.sort()

        cur = head
        for i in range(len(arr)):
            cur.val = arr[i]
            cur = cur.next
        return head