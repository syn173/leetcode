# 127. Word Ladder

"""
上一题的简化版，只要求出最短的数量，不用输出路径，直接bfs即可，
但是第一次还是tle了，因为这个数据量更大些，再判断是否相邻时不能去遍历完整列表，先预处理了数据提交成功，结果时间在末尾5%，说明有更好的加速方法
"""
import string
from typing import List

class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        count = 0
        if not endWord in wordList:
            return 0

        if not beginWord in wordList:
            wordList.append(beginWord)

        wordMap = {}
        for word in wordList:
            wordMap[word] = []

        for i in range(len(wordList)):
            for j in range(i + 1, len(wordList)):
                if self.isAdjacent(wordList[i], wordList[j]):
                    wordMap[wordList[i]].append(wordList[j])
                    wordMap[wordList[j]].append(wordList[i])
        visited = {}
        queue = [beginWord]
        while len(queue):
            count += 1
            for i in range(len(queue)):
                curWord = queue.pop(0)

                if curWord == endWord:
                    return count

                for nextWord in wordMap[curWord]:
                    if not visited.get(nextWord):
                        queue.append(nextWord)
                        visited[nextWord] = True

        # print(count)
        return 0

    def isAdjacent(self, s1, s2):
        count = 0
        for i in range(len(s1)):
            if s1[i] != s2[i]:
                count += 1

        return count == 1


solution = Solution()
solution.ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])

"""
想要加速主要是在判断相邻上下文章，因为只有一个字母不同，可以将单词进行拆分重组来做映射 及 s[:i] + '*' + s[i+1:]
"""
class SolutionFromTopSubmission:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        words = set(wordList)
        if endWord not in words:
            return 0
        bs = {beginWord}
        es = {endWord}
        dis = 1

        while bs:
            words -= bs
            dis += 1
            ns = set()
            for w in bs:
                for i in range(len(w)):
                    pre = w[:i]
                    post = w[i+1:]
                    for c in string.ascii_lowercase:
                        nw = pre + c + post
                        if nw in words:
                            if nw in es:
                                return dis
                            ns.add(nw)
            bs = ns
            if len(bs) > len(es):
                bs, es = es, bs
        return 0