# 160. Intersection of Two Linked Lists
"""
简单难度题目，一时没找到思路，看了solution后发现，两个指针分别遍历一遍两条链表，
如果有交叉，那么他们在相遇时候走过的路程必然是一样长的
"""
# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        ta = headA
        tb = headB

        while ta != tb:
            ta = ta.next if ta else headB
            tb = tb.next if tb else headA

        return ta