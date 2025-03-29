/**
 Do not return anything, modify board in-place instead.
 */

// 문제가 보더에 인접한 "O"만 "X"로 안바꾼다.
// as is
// [
//   ["X", "O", "X", "X"],
//   ["O", "O", "X", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "X", "X", "X"],
// ]

//  to be
//  [ 'X', 'O', 'X', 'X' ],
//  [ 'O', 'X', 'X', 'X' ],
//  [ 'X', 'X', 'X', 'X' ],
//  [ 'X', 'X', 'X', 'X' ]

export function surroundedRegions(board: string[][]): void {
  if (board.length === 0) return;

  const rows = board.length;
  const cols = board[0].length;

  const queue: [number, number][] = [];

  // 4 directional movement
  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
  ];

  // **Step 1: Find 'O's on the edges and mark them as '#'**
  function markBorderConnected(row: number, col: number) {
    if (board[row][col] !== "O") return;
    board[row][col] = "#";
    queue.push([row, col]);
  }

  // Mark all 'O's on the borders
  for (let r = 0; r < rows; r++) {
    markBorderConnected(r, 0); // Left border
    markBorderConnected(r, cols - 1); // Right border
  }
  for (let c = 0; c < cols; c++) {
    markBorderConnected(0, c); // Top border
    markBorderConnected(rows - 1, c); // Bottom border
  }

  // **Step 2: BFS to mark all connected 'O's from the border**
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
        board[newX][newY] === "O"
      ) {
        board[newX][newY] = "#";
        queue.push([newX, newY]);
      }
    }
  }

  // **Step 3: Convert remaining 'O's to 'X' and '#' back to 'O'**
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O") board[r][c] = "X";
      else if (board[r][c] === "#") board[r][c] = "O";
    }
  }
}
