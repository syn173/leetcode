# 141. Linked List Cycle

"""
首先最简单想到的是hash表，记录一下访问即可
投机解法，因为题目说结点不超过10000个，那么循环这么多次，还没有为空则表示有环
最后是双指针，快慢两个，如果有环，一定会追上的
(因为fast先进入环，在slow进入之后，如果把slow看作在前面，fast在后面每次循环都向slow靠近1，所以一定会相遇，而不会出现fast直接跳过slow的情况。)
"""
# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        hashMap = {}
        while head:
            if head in hashMap:
                return True
            hashMap[head] = True
            head = head.next

        return False

class SolutionTrick:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        cnt = 0
        while head and cnt < 10001:
            head = head.next
            cnt += 1

        return bool(head)

# from top submission
class SolutionTwoPoints:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False
