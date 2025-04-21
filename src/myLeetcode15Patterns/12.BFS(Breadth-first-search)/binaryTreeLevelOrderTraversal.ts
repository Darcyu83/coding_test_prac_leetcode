import { TreeNode } from "../../utils/treeNode";

// BFS
// ensures predictable memory usage and efficient processing.
function levelOrderBFS(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    // Number of nodes at the same level
    const cntNodesAtSameLevel = queue.length;
    // Valuses of the same level
    const valsOnThisLevel: number[] = [];

    for (let i = 0; i < cntNodesAtSameLevel; i++) {
      const node = queue.shift()!;
      valsOnThisLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(valsOnThisLevel);
  }

  return result;
}

// BFS
// keeping track of the depth level
// works fine for small or balanced trees but is not as efficient in deep or skewed trees due to recursion depth limits
function levelOrderRecursive(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  function bfs(node: TreeNode | null, level: number) {
    if (!node) return;
    if (!result[level]) {
      result[level] = [];
    }

    result[level].push(node.val);

    level++;
    bfs(node.left, level);
    bfs(node.right, level);
  }

  bfs(root, 0);
  return result;
}

function levelOrderDFSIterative(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const stack: { node: TreeNode; level: number }[] = [{ node: root, level: 0 }];

  while (stack.length > 0) {
    const { node, level } = stack.pop()!;
    if (!result[level]) {
      result[level] = [];
    }

    result[level].push(node.val);

    if (node.left) stack.push({ node: node.left, level: level + 1 });
    if (node.right) stack.push({ node: node.right, level: level + 1 });
  }

  return result;
}

function levelOrder(root: TreeNode | null): number[][] {
  const result = [];
  const queue = [root];
  while (queue.length) {
    const thisLevelNodesCnt = queue.length;
    const vals = [];
    for (let i = 0; i < thisLevelNodesCnt; i++) {
      const node = queue.shift()!;

      vals.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(vals);
  }

  return result;
}
