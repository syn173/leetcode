# 116. Populating Next Right Pointers in Each Node

# bfs 将每一层next赋值下一个即可
"""
也可以dfs的，感觉有点绕
"""


from typing import Optional


class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next

class Solution:
    def connect(self, root: Optional[Node]) -> Optional[Node]:
        if not root:
            return root
        que = [root]

        while len(que):
            pre = None
            for i in range(len(que)):
                node = que.pop(0)
                if node.left:
                    que.append(node.left)
                if node.right:
                    que.append(node.right)
                if pre:
                    pre.next = node
                pre = node
            pre.next = None

        return root

# dfs 根节点的next默认就是None的所以不需要处理
class SolutionFromOtherSubmission:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        def check(root):
            if not root:
                return root
            if root.left:
                root.left.next = root.right
            if root.right and root.next:
                root.right.next = root.next.left
            elif root.right and not root.next:
                root.right.next = None
            check(root.left)
            check(root.right)
            return root
        return check(root)