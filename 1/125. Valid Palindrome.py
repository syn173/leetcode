# 125. Valid Palindrome

# 简单题，但是提交的很不python，见下面SolutionFromTopSubmission

class Solution:
    def isPalindrome(self, s: str) -> bool:
        i = 0
        j = len(s) - 1
        while i < j:
            while not s[i].isalnum():
                i += 1
            while not s[j].isalnum():
                j -= 1

            if i < j and s[i].lower() != s[j].lower():
                return False
            i += 1
            j -= 1
        return True

class SolutionFromTopSubmission:
    def isPalindrome(self, s: str) -> bool:
        s = ''.join(list(filter(lambda x: x.isalpha() or x.isalnum(), s))).lower()
        return s == s[::-1]