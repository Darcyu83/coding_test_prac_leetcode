// BFS
export function numIslands(grid: string[][]): number {
  if (grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCnt = 0;

  // 4 directional
  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
  ];

  function bfs(row: number, col: number) {
    let queue: [number, number][] = [[row, col]];
    grid[row][col] = "visited";

    while (queue.length > 0) {
      const [r, c] = queue.shift()!;
      for (const [dx, dy] of directions) {
        const newX = r + dx;
        const newY = c + dy;

        if (
          newX >= 0 &&
          newX < rows &&
          newY >= 0 &&
          newY < cols &&
          grid[newX][newY] === "1"
        ) {
          queue.push([newX, newY]);
          grid[newX][newY] = "visited";
        }
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        islandCnt++;
        bfs(r, c);
      }
    }
  }

  
  return islandCnt;
}

// DFS
// call stack size exceeded
function numIslandsDFS(grid: string[][]): number {
  if (grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let isalandCnt = 0;

  // 4 directional
  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
  ];

  function dfs(row: number, col: number) {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === "0"
    )
      return;

    grid[row][col] = "visited";
    for (const [dx, dy] of directions) {
      const newX = row + dx;
      const newY = row + dy;
      dfs(newX, newY);
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "1") {
        isalandCnt++;
        dfs(col, col);
      }
    }
  }

  return 0;
}
