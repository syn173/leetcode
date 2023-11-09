from typing import List

class Solution:
  def rotate(self, matrix: List[List[int]]) -> None:
    """
    Do not return anything, modify matrix in-place instead.
    """
    aLen = len(matrix)
    iLen = ((aLen - 1 ) // 2)
    jLen = (iLen - 1) if (aLen & 1 == 1) else iLen
    for i in range(0, iLen + 1):
      for j in range(0, jLen + 1):
        tmp = matrix[i][j]
        a = i
        b = j
        matrix[a][b] = matrix[aLen - b - 1][a]
        print(a, b)

        [a, b] = [aLen - b - 1, a]
        matrix[a][b] = matrix[aLen - b - 1][a]
        print(a, b)

        [a, b] = [aLen - b - 1, a]
        matrix[a][b] = matrix[aLen - b - 1][a]
        print(a, b)

        [a, b] = [aLen - b - 1, a]
        matrix[a][b] = tmp
        print(a, b)

    # for i in range(0, aLen):
    #   print(matrix[i])

solution = Solution()
# solution.rotate([
#   [1, 2, 3],
#   [4, 5, 6],
#   [7, 8, 9],
# ])

solution.rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
])