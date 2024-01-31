# 142. Linked List Cycle II

"""
参考 https://www.cnblogs.com/hiddenfox/p/3408931.html
图示解释的很清楚
首先，假设链表起点到环入口的长度为--a，环入口到快慢指针相遇点的长度为--b，快慢指针相遇点再到环入口的长度为--c
那么，有两个结论：
1. 快指针走的长度等于慢指针走的长度加快指针多走的长度（多走的就是环的长度），
即：2(a+b) = a+b+c+b，可以推出：a = c
2. 相遇时，慢指针走的长度等于起点到环入口的长度加相遇点再到环入口的长度，
即：a+b = c
所以，当快慢指针相遇时，再用一个指针从起点出发，慢指针继续前进，两个指针必定在环入口相遇
"""
# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            # 有环
            if slow == fast:
                # 从头开始，一个一个比较
                while head != slow:
                    head = head.next
                    slow = slow.next
                return slow

        return None

