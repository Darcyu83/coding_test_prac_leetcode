import { GraphNode as _Node } from "../../utils/graphNode";

function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return null;

  const visitedNodes = new Map<_Node, _Node>();

  function dfs(node: _Node, visitedNodes: Map<_Node, _Node>) {
    if (visitedNodes.has(node)) {
      return visitedNodes.get(node)!;
    }

    const clonedNode = new _Node(node.val);
    visitedNodes.set(node, clonedNode);

    for (const neighbor of node.neighbors) {
      clonedNode.neighbors.push(dfs(neighbor, visitedNodes));
    }

    return clonedNode;
  }

  return dfs(node, visitedNodes);
}
