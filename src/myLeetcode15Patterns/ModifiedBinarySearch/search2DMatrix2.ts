// both axes sorted in a ascending order
function searchMatrixSimple(matrix: number[][], target: number): boolean {
  let r = 0,
    c = matrix[0].length - 1;
  while (r < matrix.length && c >= 0) {
    if (matrix[r][c] === target) return true;
    if (target > matrix[r][c]) {
      r++;
    } else {
      c--;
    }
  }
  return false;
}

// finding rowIndex and colIndex
function searchMatrix(matrix: number[][], target: number): number[] {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let col = 0; col < n; col++) {
    const rowIndex = binarySearch(matrix[col], target);
    if (rowIndex !== -1) return [rowIndex, col];
  }

  return [-1, -1];
}

function binarySearch(rowArr: number[], target: number): number {
  let left = 0,
    right = rowArr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (rowArr[mid] === target) return mid;

    if (rowArr[left] <= target && target < rowArr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
