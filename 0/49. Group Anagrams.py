from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
      strDict = {}
      for str in strs:
        key = ''.join(sorted(str))
        if not key in strDict :
           strDict[key] = []
        strDict.get(key).append(str)

      # print(strDict.values())
      return strDict.values()

solution = Solution()
solution.groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])