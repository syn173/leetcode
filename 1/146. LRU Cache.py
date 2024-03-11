# 146. LRU Cache

"""
提交后时间排名很靠后，因为数组操作开销比较多，可使用双向链表或是python的OrderedDict对象
"""

from collections import OrderedDict


class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.data = {}
        self.keys = []

    def get(self, key: int) -> int:
        if not key in self.keys:
            return -1

        self.keys.remove(key)
        self.keys.append(key)

        return self.data[key]


    def put(self, key: int, value: int) -> None:
        if key in self.keys:
            self.keys.remove(key)

        self.keys.append(key)

        if len(self.keys) > self.capacity:
            self.keys.pop(0)

        # print('self.keys', key, self.keys)
        self.data[key] = value



# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)

""" from top submission 哈希&双向链表 """
#using LinkedList for keeping ordered of an Element and usinig hashmap for getting the addresss instantly
#remember : if adddig in hahsmap then also add in linkedlist
#remember : if  deleting from linkedlist then delete from hashmap  also  ... Remember the Order
class Node:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.hashmap = {}  # will store key and value as a addresss of Node
        self.cap = capacity

        self.left = Node(0, 0)
        self.right = Node(0,0)

        self.left.next = self.right
        self.right.prev = self.left


    def insert(self, node):

        #new node jo banaya hai uske liye next and prev ka intezam kro and store it
        prev = self.right.prev
        next = self.right

        #intezam hogya, ab daaldo
        node.prev = prev
        node.next = next

        #ab prev ke prev ko change kro
        prev.next = node

        #ab right ke prev ko change kro
        next.prev = node          #self.right.prev



    def remove(self, node):

        prev = node.prev
        next = node.next

        prev.next = next
        next.prev = prev


    def get(self, key: int) -> int:

        if key in self.hashmap:
            currNode = self.hashmap[key]
            self.remove(currNode)
            self.insert(currNode)
            return currNode.val
        else:
            return - 1


    def put(self, key: int, value: int) -> None:

        if key in self.hashmap:
            currNode = self.hashmap[key]
            self.remove(currNode)
            currNode.val = value
            self.insert(currNode)
        else:
            self.hashmap[key] = Node(key, value)  #inserting into hashasmap
            self.insert(self.hashmap[key])  #inserting into linked list

        if len(self.hashmap) > self.cap:
            leftNode = self.left.next
            self.remove(leftNode)
            del self.hashmap[leftNode.key]

""" from top submission OrderedDict """
class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        val = self.cache.get(key, -1)
        if val != -1:
            self.cache.move_to_end(key)
        return val

    def put(self, key: int, value: int) -> None:
        self.cache.update({key: value})
        self.cache.move_to_end(key)
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)