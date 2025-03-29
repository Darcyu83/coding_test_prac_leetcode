// BFS
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const rows = image.length;
  const cols = image[0].length;

  const originalColor = image[sr][sc];
  if (originalColor === color) return image;

  // 8 directional
  // const directions = [
  //     [-1, 1],
  //     [-1, 0],
  //     [-1, -1],
  //     [0,1],
  //     [0,-1],
  //     [1, 1],
  //     [1, 0],
  //     [1, -1]
  // ];

  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];
  const queue: [number, number][] = [[sr, sc]];
  image[sr][sc] = color;

  while (queue.length > 0) {
    const [row, col] = queue.shift()!;
    for (const [dx, dy] of directions) {
      const newX = row + dx;
      const newY = col + dy;

      if (
        newX >= 0 &&
        newY >= 0 &&
        newX < rows &&
        newY < cols &&
        image[newX][newY] === originalColor
      ) {
        image[newX][newY] = color;
        queue.push([newX, newY]);
      }
    }
  }

  return image;
}

function floodFillDfsBfsAll(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const originalColor = image[sr][sc];
  if (originalColor === color) return image;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function dfsRecursive(row: number, col: number) {
    const isInRange =
      row >= 0 && row < image.length && col >= 0 && col < image[0].length;
    if (!isInRange || image[row][col] !== originalColor) return;

    image[row][col] = color;
    for (const [dx, dy] of directions) {
      dfsRecursive(row + dx, col + dy);
    }
  }

  // time limit exceed
  function dfsIterative(row: number, col: number) {
    const stack: [number, number][] = [];
    stack.push([row, col]);
    while (stack.length > 0) {
      const [row, col] = stack.pop()!;

      image[row][col] = color;

      for (const [dx, dy] of directions) {
        const newX = row + dx;
        const newY = col + dy;

        const isInRange =
          newX >= 0 &&
          newX < image.length &&
          newY >= 0 &&
          newY < image[0].length;

        if (isInRange && image[newX][newY] === originalColor) {
          stack.push([newX, newY]);
        }
      }
    }
  }

  function bfs(row: number, col: number) {
    const queue: [number, number][] = [];
    queue.push([row, col]);

    while (queue.length > 0) {
      const [row, col] = queue.shift()!;
      image[row][col] = color;

      for (const [dx, dy] of directions) {
        const newX = row + dx;
        const newY = col + dy;

        const isInRange =
          newX >= 0 &&
          newX < image.length &&
          newY >= 0 &&
          newY < image[0].length;

        if (isInRange && image[newX][newY] === originalColor) {
          queue.push([newX, newY]);
        }
      }
    }
  }

  // dfsRecursive(sr, sc);
  // dfsIterative(sr, sc);
  bfs(sr, sc);

  return image;
}
