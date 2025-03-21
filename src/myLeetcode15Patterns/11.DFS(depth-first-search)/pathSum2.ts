import { TreeNode } from "../../utils/treeNode";

// targetSum - node.val
function pathSum1(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];

  function dfs(node: TreeNode | null, pathNums: number[], sum: number) {
    if (!node) return;

    pathNums.push(node.val);
    if (!node.left && !node.right && sum === targetSum) {
      result.push([...pathNums]);
    } else {
      dfs(node.left, pathNums, sum - node.val);
      dfs(node.right, pathNums, sum - node.val);
    }

    pathNums.pop();
  }

  dfs(root, [], targetSum);
  return result;
}

// sum 0 + node.val
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];

  function dfs(node: TreeNode | null, pathNums: number[], sum: number) {
    if (!node) return;
    pathNums.push(node.val);
    sum += node.val;

    if (!node.left && !node.right && sum === targetSum) {
      result.push([...pathNums]);
    }

    dfs(node.left, pathNums, sum);
    dfs(node.right, pathNums, sum);

    pathNums.pop();
  }

  dfs(root, [], 0);
  return result;
}
