# 101. Symmetric Tree
# 判断一棵树是否是镜像的，开始陷入dfs遍历的陷阱，中序的数组不能保证树的镜像的
# 应该每层比较，递归的时候记录每层的数据然后进行判断，更适合用bfs的，bfs使用两个数组竟然内存开销更大了些

"""
参考submission，有更简单的dfs，dfs(left.left, right.right) and dfs(left.right, right.left)
"""
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# dfs
class Solution1:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        list = []

        def dfs(tr, level):
            if not tr:
                return

            if len(list) <= level:
                list.append([])

            list[level].append(tr.left)
            list[level].append(tr.right)
            dfs(tr.left, level + 1)
            dfs(tr.right, level + 1)

        dfs(root, 0)

        def isSymmetric(arr):
            m = len(arr)
            res = True
            for i in range(m // 2):
                if not arr[i] or not arr[m - i - 1]:
                    res = arr[i] == arr[m - i - 1]
                else:
                    res = arr[i].val == arr[m - i - 1].val
                if not res:
                    return False

            return True

        for item in list:
            if not isSymmetric(item):
                return False

        return True

# bfs
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        queue = []
        queue.append(root)

        def isSymmetric(arr):
            m = len(arr)
            res = True
            for i in range(m // 2):
                if not arr[i] or not arr[m - i - 1]:
                    res = arr[i] == arr[m - i - 1]
                else:
                    res = arr[i].val == arr[m - i - 1].val
                if not res:
                    return False

            return True

        while len(queue):
            arr = queue.copy()
            # nums = map(lambda x: x.val if x else x, arr)
            # print(list(nums))
            if not isSymmetric(arr):
                return False
            queue = []
            for t in arr:
                if t:
                    queue.append(t.left)
                    queue.append(t.right)

        return True

# 参考，这题难度是简单的，上面的解法似乎是搞复杂了
class SolutionFromSumbission:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True

        def dfs(left, right):
            if not left and not right:
                return True
            elif not left or not right:
                return False
            else:
                return left.val == right.val and dfs(left.left, right.right) and dfs(left.right, right.left)
        return dfs(root.left, root.right)