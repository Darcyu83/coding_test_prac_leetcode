// const l1 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const l2 = [1, 2, 3, 4, 5];

import { largestRectangleArea } from "./src/leetcode75/MonotonicStack/largestRectagleInHistogram";
import { makeLottery5GamesWithoutNumbersInFirstGame } from "./src/lottery/utils";
import { MaxPriorityQueue } from "./src/utils/priorityQueue";

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

console.log(
  "largestRectangleArea ==== ",
  largestRectangleArea([2, 1, 5, 6, 2, 3])
);

const heap = new MaxPriorityQueue({
  priority: (item: { id: number; title: string }) => item.id,
});

console.log(heap.enqueue({ id: 30, title: "test" }));
console.log(heap.peek());
