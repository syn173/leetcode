# 138. Copy List with Random Pointer

"""
关键在于怎么保存新复制的结点，topic 中提到hash table需要先全部缓存，主要是key值选择要处理好
参考了问题描述的hint
将新复制的结点放到链表中，构造 a -> a' -> b -> b'，就方便处理
第一步，构建next，第二步，构建random，第三步，删除原来结点
"""

# Definition for a Node.
from typing import Optional


class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random


class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return None

        current = head
        while current:
            t = current.next
            newNode = Node(current.val, t)
            current.next = newNode
            current = t

        pre = head
        current = head.next

        while current:
            current.random = None if not pre.random else pre.random.next
            current = current.next
            if not current:
                break
            pre = current
            current = current.next


        current = head.next
        newHead = current

        while current and current.next:
            current.next = current.next.next
            current = current.next

        return newHead