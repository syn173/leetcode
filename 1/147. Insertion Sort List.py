# 147. Insertion Sort List
"""
链表题目，时间分数不高，看了下排名前面的submission好多是调了sort方法，然后去赋值，属于作弊了
"""
# Definition for singly-linked list.
from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head

        pre = head
        cur = head.next
        while cur:
            tmp = cur.next

            p1 = None
            p2 = head
            while p2 != cur and p2.val < cur.val:
                p1 = p2
                p2 = p2.next

            if p2 == cur:
                pre = cur
            elif p1:
                cur.next = p2
                p1.next = cur
                pre.next = tmp
            else:
                cur.next = p2
                pre.next = tmp
                head = cur

            cur = tmp
        return head