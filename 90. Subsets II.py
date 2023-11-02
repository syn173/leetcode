# generate by chatGPT
class Solution:
  def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
    def backtrack(start, path):
        result.append(path[:])
        for i in range(start, len(nums)):
            # Skip duplicates to avoid duplicate subsets
            if i > start and nums[i] == nums[i - 1]:
                continue
            path.append(nums[i])
            backtrack(i + 1, path)
            path.pop()

    result = []
    nums.sort()  # Sort the input array to handle duplicates
    backtrack(0, [])
    return result
