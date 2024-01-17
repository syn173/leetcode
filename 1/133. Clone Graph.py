# 133. Clone Graph

"""
简单dfs，难点在于循环依赖的处理，需要借助一个缓存，巧妙利用了对象的引用
"""

# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []


from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node:
            return None

        mem = {}
        def deepClone(node):
            if node.val in mem:
                return mem[node.val]

            newNode = Node(node.val)
            mem[node.val] = newNode

            for nei in node.neighbors:
                newNode.neighbors.append(deepClone(nei))

            return newNode

        return deepClone(node)