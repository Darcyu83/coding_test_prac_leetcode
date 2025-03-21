import { TreeNode } from "../../utils/treeNode";

/**
 *
 * DFS(Stack) push/pop : Depth-First Search
 * More memory efficient in shallow trees
 *
 * BFS(Queue) push/shift : Breadth-First Search
 * More memory efficient in balanced trees
 */

// Breadth-First Search (BFS).
// BFS (Queue) is better for balanced trees since it explores level by level.
export function binaryTreePathsBFS(root: TreeNode | null): string[] {
  if (!root) return [];

  const result: string[] = [];
  const queue: { node: TreeNode; path: string }[] = [
    { node: root, path: `${root.val}` },
  ];

  while (queue.length) {
    const { node, path } = queue.shift()!;

    if (!node.left && !node.right) {
      result.push(path);
    }

    if (node.left) {
      queue.push({ node: node.left, path: `${path}->${node.left.val}` });
    }

    if (node.right) {
      queue.push({ node: node.right, path: `${path}->${node.right.val}` });
    }
  }

  return result;
}

// Depth-First Search (DFS).
// DFS (Stack) is usually more memory-efficient for trees that are deep but not very wide.
function binaryTreePathsDFS(root: TreeNode | null): string[] {
  if (!root) return [];

  const result: string[] = [];
  const stack: { node: TreeNode; path: string }[] = [
    { node: root, path: `${root.val}` },
  ];

  while (stack.length > 0) {
    const { node, path } = stack.pop()!;
    if (!node.left && !node.right) {
      result.push(path);
    }

    if (node.left) {
      stack.push({ node: node.left, path: `${path}->${node.left.val}` });
    }

    if (node.right) {
      stack.push({ node: node.right, path: `${path}->${node.right.val}` });
    }
  }

  return result;
}

// DFS : RECURSIVE
function binaryTreePathsRecursive(root: TreeNode | null): string[] {
  const path: number[] = [];
  const result: string[] = [];

  function dfs(node: TreeNode | null) {
    if (!node) return;
    path.push(node.val);
    if (!node.left && !node.right) {
      result.push(path.join("->"));
    } else {
      dfs(node.left);
      dfs(node.right);
    }
    path.pop();
  }

  dfs(root);

  return result;
}

// ===================================
const path: number[] = [];
const result: string[] = [];

// RECURSIVE
function dfs(node: TreeNode | null) {
  if (!node) return;

  path.push(node.val);

  if (!node.left && !node.right) {
    result.push(path.join("->"));
  } else {
    dfs(node.left);
    dfs(node.right);
  }
  path.pop();
}

// DFS : STACK
const stack: { node: TreeNode; path: string }[] = [];

while (stack.length) {
  const { node, path } = stack.pop()!;

  if (!node.left && !node.right) result.push(path);

  if (node.left) {
    stack.push({ node: node.left, path: `${path}->${node.val}` });
  }

  if (node.right) {
    stack.push({ node: node.right, path: `${path}->${node.val}` });
  }
}

// BFS : QUEUE
const queue: { node: TreeNode; path: string }[] = [];
while (queue.length) {
  const { node, path } = queue.shift()!;

  if (!node.left && !node.right) {
    result.push(path);
  }

  if (node.left) {
    queue.push({ node: node.left, path: `${path}->${node.val}` });
  }

  if (node.right) {
    queue.push({ node: node.right, path: `${path}->${node.val}` });
  }
}
