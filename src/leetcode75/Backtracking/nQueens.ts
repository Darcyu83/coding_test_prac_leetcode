function solveNQueens(n: number): string[][] {
  const result: string[][] = [];

  // columns: Tracks which columns are already occupied by a queen.
  // diagonals1: Tracks the "main diagonals" (difference between row and column).
  // diagonals2: Tracks the "anti-diagonals" (sum of row and column).
  function backtrack(
    row: number,
    columns: Set<number>,
    mainDiagonals: Set<number>,
    antiDiagonals: Set<number>,
    currentBoard: string[]
  ) {
    if (row === n) {
      result.push([...currentBoard]);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (
        columns.has(col) ||
        mainDiagonals.has(row - col) ||
        antiDiagonals.has(row + col)
      ) {
        continue;
      }

      currentBoard[row] = ".".repeat(col) + "Q" + ".".repeat(n - col - 1);
      columns.add(col);
      mainDiagonals.add(row - col);
      antiDiagonals.add(row + col);

      backtrack(row + 1, columns, mainDiagonals, antiDiagonals, currentBoard);

      columns.delete(col);
      mainDiagonals.delete(row - col);
      antiDiagonals.delete(row + col);
    }
  }

  backtrack(0, new Set(), new Set(), new Set(), Array(n).fill(""));

  return result;
}
