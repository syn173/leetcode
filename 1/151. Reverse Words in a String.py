# 151. Reverse Words in a String

class Solution:
    def reverseWords(self, s: str) -> str:
        s = s.strip()
        return ' '.join(filter(bool, s.split(' ')[::-1]))


"""
可以更简洁些的
"""

class SolutionFromTopSubmission:
    def reverseWords(self, s: str) -> str:
        return ' '.join(reversed(s.split()))