/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "../../utils/treeNode";

/**
 
 -10
/    \
9      20
     /    \
   15     7

*/
const root = new TreeNode(
  -10,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

// PostOrder Traversal : Bottom-Up (left right root )
function maxPathSum(root: TreeNode | null): number {
  let maxSum = -Infinity;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;
    const leftMax = Math.max(dfs(node.left), 0);
    const rightMax = Math.max(dfs(node.right), 0);

    const localMax = node.val + leftMax + rightMax;

    maxSum = Math.max(maxSum, localMax);

    // Returns the max gain from one side of the subtree
    // since a valid path cannot split into two branches.
    return node.val + Math.max(leftMax, rightMax);
  }

  dfs(root);
  return maxSum;
}

export default () => maxPathSum(root);
