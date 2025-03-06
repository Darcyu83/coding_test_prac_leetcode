// using freshOrangeCnt
// Time Complexity: O(n * m)
// Space Complexity: O(n * m)

// Step 1 : Find Rotten Oranges
// Add all rotten oranges (2) to a queue and mark them as visited

// Step 2 : BFS Spread
// Process each orange in the queue, infecting its fresh neighbors (1) in 4 directions.
// Count BFS levels to track time (count).

// Step 3 : Final check
// If fresh oranges (1) remain, return -1.
// Otherwise, return count (time taken).
function orangesRotting(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let minutes = 0,
    freshCnt = 0;
  const rottenOrangesPosQueue: [number, number][] = [];

  // Step 1: Enqueue all rotten oranges
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        rottenOrangesPosQueue.push([r, c]);
      } else if (grid[r][c] === 1) {
        freshCnt++;
      }
    }
  }

  if (freshCnt === 0) return 0;

  // 4 directional top / bottom / left / right
  const directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  // Step 2: BFS to rot fresh oranges
  while (rottenOrangesPosQueue.length > 0 && freshCnt > 0) {
    let size = rottenOrangesPosQueue.length;

    for (let i = 0; i < size; i++) {
      const [row, col] = rottenOrangesPosQueue.shift()!;

      // make adjacent fresh orange rotten in 4 direction
      for (const [dx, dy] of directions) {
        const newX = row + dx;
        const newY = col + dy;
        if (
          newX < rows && // new row positoin x is under row length
          newY < cols && // new col positoin y is under col length
          newX >= 0 &&
          newY >= 0 &&
          // !visited[newX][newY] && // not visited
          grid[newX][newY] === 1 // fresh one
        ) {
          grid[newX][newY] = 2; // make it rotten
          rottenOrangesPosQueue.push([newX, newY]);
          freshCnt--;
        }
      }
    }

    minutes++;
  }

  return freshCnt === 0 ? minutes : -1;
}

// Time Complexity: O(n * m)
// Space Complexity: O(n * m)
function orangesRottingVistedList(grid: number[][]): number {
  // Step 1 : Find Rotten Oranges
  // Add all rotten oranges (2) to a queue and mark them as visited

  // Step 2 : BFS Spread
  // Process each orange in the queue, infecting its fresh neighbors (1) in 4 directions.
  // Count BFS levels to track time (count).

  // Step 3 : Final check
  // If fresh oranges (1) remain, return -1.
  // Otherwise, return count (time taken).

  const rowLength = grid.length;
  const colLength = grid[0].length;
  let minutes = 0;

  const rottenOrangesPosQueue: [number, number][] = [];
  const visited: boolean[][] = Array.from({ length: rowLength }, () =>
    Array(colLength).fill(false)
  );

  // Step 1: Enqueue all rotten oranges
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (grid[i][j] === 2) {
        rottenOrangesPosQueue.push([i, j]);
        visited[i][j] = true;
      }
    }
  }

  // 4 directional top / bottom / left / right
  const directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  // Step 2: BFS to rot fresh oranges
  while (rottenOrangesPosQueue.length > 0) {
    let size = rottenOrangesPosQueue.length;

    for (let i = 0; i < size; i++) {
      const [row, col] = rottenOrangesPosQueue.shift()!;

      // make adjacent fresh orange rotten in 4 direction
      for (const [dx, dy] of directions) {
        const newX = row + dx;
        const newY = col + dy;
        if (
          newX < rowLength && // new row positoin x is under row length
          newY < colLength && // new col positoin y is under col length
          newX >= 0 &&
          newY >= 0 &&
          // !visited[newX][newY] && // not visited
          grid[newX][newY] === 1 // fresh one
        ) {
          grid[newX][newY] = 2; // make it rotten
          rottenOrangesPosQueue.push([newX, newY]);
          visited[newX][newY] = true;
        }
      }
    }

    minutes++;
  }

  // Step 3: Check for remaining fresh oranges
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }

  return minutes === -1 ? 0 : minutes;
}
