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
function binaryTreePathsBFS(root: TreeNode | null): string[] {
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

// DFS
function binaryTreePathsRecursive(root: TreeNode | null): string[] {
  const path: number[] = [];
  const result: string[] = [];

  function traverse(node: TreeNode | null) {
    if (!node) return;
    path.push(node.val);
    if (!node.left && !node.right) {
      result.push(path.join("->"));
    } else {
      traverse(node.left);
      traverse(node.right);
    }
    path.pop();
  }

  traverse(root);

  return result;
}
