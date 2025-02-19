/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "../utils/listNode";

// origin
// function getNumberFromList(list: ListNode): number {
//   let numberInReverseOrder = "";

//   let runner: ListNode | null = list;
//   while (runner) {
//     numberInReverseOrder += runner.val.toString();

//     runner = runner.next;
//   }

//   const output = numberInReverseOrder.split("").reverse().join("");
//   return Number(output);
// }

// lesser complexity
// function getNumberFromList(list: ListNode): number {
//   let output = 0;
//   let index = 0;

//   let runner: ListNode | null = list;

//   while (runner) {
//     output = runner.val * Math.pow(10, index) + output;
//     runner = runner.next;
//     index++;
//   }
//   return output;
// }

// // BigInt 적용 : 이게 좀 어려운듯
// function getNumberFromList(list: ListNode): bigint {
//   let output = BigInt(0);
//   let index = 0;

//   let runner: ListNode | null = list;

//   while (runner) {
//     output = BigInt(runner.val * Math.pow(10, index)) + output;
//     runner = runner.next;
//     index++;
//   }
//   return output;
// }

// less complexity :: 정답 1
function getNumberFromList(list: ListNode): bigint {
  let numberStr = "";

  let runner: ListNode | null = list;

  while (runner) {
    numberStr = runner.val.toString() + numberStr;
    runner = runner.next;
  }

  return BigInt(numberStr);
}

// 정답 1 O(n + m + d) => lenth of l1 + length of l2 + length of sumStr
export function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  const n1 = getNumberFromList(l1); // n
  const n2 = getNumberFromList(l2); // m

  console.log("리스트 밸류 ==== ", n1, n2);

  const sumStr = (n1 + n2).toString();

  let output: ListNode | null = null;
  for (let i = 0; i < sumStr.length; i++) {
    // d
    const digit = sumStr[i];

    output = new ListNode(Number(digit), output);
  }

  return output as ListNode;
}

// function getNumberFromListFaster(list: ListNode): bigint {

// }
export function addTwoNumbersFaster(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode {
  let r1 = l1;
  let r2 = l2;
  const output: ListNode = new ListNode();

  let runner: ListNode | null = output;

  while (r1 || r2) {
    let digit = (r1?.val || 0) + (r2?.val || 0);
    if (digit >= 10) {
      digit -= 10;
      // do carry over magic here

      if (r1?.next) {
        r1.next.val++;
      } else if (r2?.next) {
        r2.next.val++;
      } else if (r1) {
        r1.next = new ListNode(1);
      } else if (r2) {
        r2.next = new ListNode(1);
      }
    }

    // X output.val = digit;
    runner.val = digit;
    if (r1?.next || r2?.next) {
      runner.next = new ListNode();
      runner = runner.next;
    }

    if (r1) {
      r1 = r1.next;
    }

    if (r2) {
      r2 = r2.next;
    }
  }

  console.log("addTwoNumbersFaster result ==== ", output);
  return output;
}

export function convertArrToListNode(arr: number[]): ListNode {
  let output: ListNode | null = null;

  for (let i = 0; i < arr.length; i++) {
    console.log("어레이 값 체크 , idx ==== ", i, arr[i]);
    output = new ListNode(arr[i], output);
  }

  return output as ListNode;
}

export function convertListNodeToOriginNum(listNode: ListNode): number {
  let numArr: number[] = [];

  let runner: ListNode | null = listNode;
  while (runner) {
    numArr = [runner.val, ...numArr];
    runner = runner?.next;
  }

  return Number(numArr.join(""));
}
