import { TreeNode } from "../../utils/treeNode";

The best approach is inorder traversal because:
BST Inorder Traversal (Left → Node → Right) produces sorted values in ascending order.
Stop early when we find the kth element (O(k) complexity instead of O(n) in worst case).
Best Solution: Iterative Inorder Traversal (Using Stack)
Time Complexity: O(k)
Space Complexity: O(h) (h = tree height, worst case O(n) for skewed trees, O(log n) for balanced trees)

// Binary Search Tree (BST)
// Recursive
function kthSmallest(root: TreeNode | null, k: number): number {
  let ans: number | null = null;

  const dfs = (node: TreeNode | null) => {
    if (!node || ans !== null) return;

    dfs(node.left);

    k--;

    if (k === 0) {
      ans = node.val;
      return;
    }

    dfs(node.right);
  };

  dfs(root);

  return ans!;
}

function kthSmallestIterative(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];

  let current: TreeNode | null = root;

  for (let i = 1; i <= k; i++) {
    // Push all left subtree
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop()!;
    if (i === k) return current.val;
    current = current.right; // Move to right subtree
  }
  return -1; // This should never be reached if k is valid
}
