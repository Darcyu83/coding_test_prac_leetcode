// const l1 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const l2 = [1, 2, 3, 4, 5];

import { makeLottery5GamesWithoutNumbersInFirstGame } from "./src/lottery/utils";
import { kthSmallest } from "./src/myLeetcode15Patterns/10.BinaryTreeTraversal/kthSmallestInOrder";
import { eraseOverlapIntervals } from "./src/myLeetcode15Patterns/8.OverlappingIntervals/nonOverlappingIntervals";
import { TreeNode } from "./src/utils/treeNode";

// const twoSumArr = [3, 2, 3];
// const result = twoSum(twoSumArr, 6);

// ============================================================

// const result = addTwoLinkedNumbers([2, 4, 3], [5, 6, 4]);
// const result = lengthOfLongestSubstring("pwwkew");
// ============================================================
// const originNum1 = 342;
// const originNum2 = 465;
// const l1 = originNum1
//   .toString()
//   .split("")
//   .map((str) => Number(str));
// const l2 = originNum2
//   .toString()
//   .split("")
//   .map((str) => Number(str));

// const listNode1 = convertArrToListNode(l1);
// const listNode2 = convertArrToListNode(l2);

// console.log(
//   "listNode1 ==== ",
//   listNode1,
//   convertListNodeToOriginNum(listNode1)
// );
// console.log(
//   "listNode2 ==== ",
//   listNode2,
//   convertListNodeToOriginNum(listNode2)
// );

// // const result = addTwoNumbersFaster(listNode1, listNode2);
// const result = addTwoNumbers(listNode1, listNode2);
// console.log("result ===  ", result);

// javascript algorithms ===========================

// const result = sumAllNumbersInARange([4, 1]);

// console.log("sumAllNumbersInARange ==== ", result);

// topInterview150 ===========================

// const result = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
// console.log("removeElement ==== ", result);

// const result = removeDuplicates([1, 1, 2]);

// const result = removeDuplicates2([0, 0, 1, 1, 1, 1, 2, 3, 3]);

// const result = majorityElement([2, 2, 1, 1, 1, 2, 2]);

// const result = rotateArry([1, 2, 3, 4, 5, 6, 7], 3);

// const result = maxProfit([7, 1, 5, 3, 6, 4]);
// const result = maxProfit([2, 4, 1]);
// const result = maxProfit([2, 1, 2, 1, 0, 1, 2, 0, 1]);

// const result = maxProfit2([7, 1, 5, 3, 6, 4]);
// const result = maxProfit2([1, 2, 3, 4, 5]);

// const result = canJump([2, 3, 1, 1, 4]);
// const result = canJump([3, 2, 1, 0, 4]);
// const result = canJump([0, 1]);

// const result = runningSum([1, 2, 3, 4]);

// 로또 번호
const result = makeLottery5GamesWithoutNumbersInFirstGame();
console.log("result ==== ", result);

// getMinFixedPointOnChessBorad();

// console.log(minWindow("ADOBECODEBANC", "ABC"));

// Linked list solution ;;
// let head = makeLinkedNodeHead(5);
// const newHead = reverseBetween(head, 2, 4);

// let currNode = newHead;

// while (currNode) {
//   console.log(currNode);
//   currNode = currNode.next;
// }

// console.log(
//   "nextGreaterElement ==== ",
//   // nextGreaterElement([4, 1, 2], [1, 3, 4, 2])
//   nextGreaterElement([2, 4], [  1, 3, 2, 4])
// );

// console.log(
//   "dailyTemperatures ==== ",
//   dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
// );

// console.log(
//   "largestRectangleArea ==== ",
//   largestRectangleArea([2, 1, 5, 6, 2, 3])
// );

// const heap = new MaxPriorityQueue({
//   priority: (item: { id: number; title: string }) => item.id,
// });

// console.log(heap.enqueue({ id: 30, title: "test" }));
// console.log(heap.peek());

// console.log(
//   numIslands([
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"],
//   ])
// );

// surroundedRegions([
//   ["X", "X", "X", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "X", "O", "X"],
//   ["X", "O", "X", "X"],
// ]);

// surroundedRegions([
//   ["X", "O", "X", "X"],
//   ["O", "O", "X", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "X", "X", "X"],
// ]);
// surroundedRegions([
//   ["O", "O", "O", "O", "O", "O"],
//   ["X", "O", "O", "O", "O", "O"],
//   ["X", "O", "O", "O", "O", "O"],
// ]);

// permute([1, 2, 3]);

// permute2([1, 2, 3]);

// console.log(climbStairsMemo(10));
// console.log(climbStairsMemoPaths(5));
// console.log(climbStairsTabPaths(5));
// console.log(climbStairsSpaceOptimizedPaths(5));

// fibonacci(10);

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0]));

// console.log(subarraySum1([10, 2, -2, -20, 10], -10));
// console.log(subarraySum2([10, 2, -2, -20, 10], -10));

// largestRectangleArea2Passed([1, 3, 5, 6, 4, 7, 2, 9]);

// kthLargestEl();

// topKFrequentHeap([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 2);
// topKFrequentHeap([1, 1, 1, 2, 2, 3], 2);

// kSmallestPairsRecap([1, 7, 11], [2, 4, 6], 3);
// kSmallestPairsRecap([1, 2, 4, 5, 6], [3, 5, 7, 9], 3);

eraseOverlapIntervals([
  [1, 100],
  [11, 22],
  [1, 11],
  [2, 12],
]);

// console.log(search1([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(search1([5, 1, 3], 3));

// const root = new TreeNode(
//   -10,
//   new TreeNode(9),
//   new TreeNode(
//     20,
//     new TreeNode(15),
//     // null
//     new TreeNode(7)
//   )
// );
// console.log(binaryTreePathsBFS(root));

const root = new TreeNode(
  3,
  new TreeNode(1, null, new TreeNode(2)),
  new TreeNode(4)
);

kthSmallest(root, 2);
