# 117. Populating Next Right Pointers in Each Node II
# bfs同上一题解法，优化为先放右儿子再放左儿子，就不用使用prev判空了
# 因为不是完全二叉树，就不像上一题那么容易dfs了，还是bfs更好理解

# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next


class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return root
        que = [root]
        while len(que):
            nextNode = None
            for i in range(len(que)):
                node = que.pop(0)
                node.next = nextNode
                nextNode = node
                if node.right:
                    que.append(node.right)
                if node.left:
                    que.append(node.left)
        return root