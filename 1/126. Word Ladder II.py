# 126. Word Ladder II
"""
先做好可转换的映射，然后进行dfs，结果直接超时了, 然后改成bfs,想着第一次拿到结果时候就可以退出，可还是超时。
参考这个解释才想清楚，问题在于我的解法里都是保存了路径，这个会有很多重复的，
具体见 https://leetcode.com/problems/word-ladder-ii/solutions/2424910/Explanation-with-Animation/
在搜索过程中应该保存结点而不是路径的，因为同一个结点可能被多个路径复用。
那么搜索结束是怎么构造路径呢，在bfs过程中保存下来每一层的结点，通过它再从后向前反向构造出路径即可。
另一种构造思路是在bfs的过程中构造每一个结点的父节点关系，然后进行dfs组成路径
"""

from typing import List

class Solution:
    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
        #  If the endWord is not in wordList, there is no valid transformation sequence
        if not endWord in wordList:
            return []
        wordMap = {}
        visited = {}

        # 方便下面wordMap的初始化，因为beginWord不确定是否在wordList，统一放进去处理
        if not beginWord in wordList:
            wordList.append(beginWord)

        for word in wordList:
            visited[word] = False
            wordMap[word] = []

        for i in range(len(wordList) - 1):
            for j in range(i + 1, len(wordList)):
                if self.isAdjacent(wordList[i], wordList[j]):
                    wordMap[wordList[i]].append(wordList[j])
                    wordMap[wordList[j]].append(wordList[i])

        # bfs
        flag = False
        queue = [beginWord]
        visited[beginWord] = True
        levelList = []
        while len(queue) and not flag:
            levelList.append(queue[::])
            queue = []
            for word in levelList[-1]:
                for nextWord in wordMap[word]:
                    if not visited[nextWord]:

                        if nextWord == endWord:
                            flag = True
                            break
                        queue.append(nextWord)
                        visited[nextWord] = True


        if not flag:
            return []

        # 构造路径
        res = [[endWord]]
        for level in levelList[::-1]:
            # print(level)
            for i in range(len(res)):
                cur = res.pop(0)
                for beforeWord in level:
                    if self.isAdjacent(beforeWord, cur[0]):
                        res.append([beforeWord] + cur)
        print(res)
        return res

    def isAdjacent(self, s1, s2):
        count = 0
        for i in range(len(s1)):
            if s1[i] != s2[i]:
                count += 1

        return count == 1


solution = Solution()
solution.findLadders("hit", "cog", ["hot","dot","dog","lot","log","cog"])
solution.findLadders("qa", "sq",
["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br",
 "ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh",
 "sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz",
 "no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi",
 "am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]
)

# solution.findLadders("hit", "cog", ["hot","dot","dog","lot","log","cog"])