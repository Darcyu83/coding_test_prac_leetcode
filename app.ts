import {
  ListNode,
  addTwoNumbers,
  addTwoNumbersFaster,
  convertArrToListNode,
  convertListNodeToOriginNum,
} from "./addTwoNumbers";
import { twoSum } from "./src/twoSum";

// const twoSumArr = [3, 2, 3];
// const result = twoSum(twoSumArr, 6);

// const l1 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const l2 = [1, 2, 3, 4, 5];

const originNum1 = 342;
const originNum2 = 465;
const l1 = originNum1
  .toString()
  .split("")
  .map((str) => Number(str));
const l2 = originNum2
  .toString()
  .split("")
  .map((str) => Number(str));

const listNode1 = convertArrToListNode(l1);
const listNode2 = convertArrToListNode(l2);

console.log(
  "listNode1 ==== ",
  listNode1,
  convertListNodeToOriginNum(listNode1)
);
console.log(
  "listNode2 ==== ",
  listNode2,
  convertListNodeToOriginNum(listNode2)
);

// const result = addTwoNumbersFaster(listNode1, listNode2);
const result = addTwoNumbers(listNode1, listNode2);
console.log("result ===  ", result);
