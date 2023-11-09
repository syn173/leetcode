/**
 * 79. Word Search
 * dfs
 */

function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;
  const visited: boolean[][] = [];
  for (let i = 0; i < m; ++i) {
    visited.push(Array(n).fill(false));
  }

  const next = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let flag = false;

  function dfs(si: number, sj: number, count: number) {
    if (flag) {
      return;
    }
    if (count === word.length) {
      flag = true;
      return;
    }
    for (let d = 0; d < 4; ++d) {
      const ni = si + next[d][0];
      const nj = sj + next[d][1];
      if (
        ni >= 0 &&
        ni < m &&
        nj >= 0 &&
        nj < n &&
        !visited[ni][nj] &&
        board[ni][nj] === word.charAt(count)
      ) {
        visited[ni][nj] = true;
        dfs(ni, nj, count + 1);
        visited[ni][nj] = false;
      }
    }
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (board[i][j] === word.charAt(0)) {
        visited[i][j] = true;
        dfs(i, j, 1);
        if (flag) {
          return true;
        }
        visited[i][j] = false;
      }
    }
  }

  return false;
}

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
);
