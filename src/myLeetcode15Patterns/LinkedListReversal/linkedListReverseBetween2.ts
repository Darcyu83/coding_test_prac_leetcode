import { ListNode } from "../../utils/listNode";

export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let dummy = new ListNode(0, head);

  let leftNode: ListNode | null = dummy;

  let curr = head;

  for (let i = 1; i < left; i++) {
    leftNode = curr;
    curr = curr?.next || null;
  }

  let sublistTail = curr!;
  let reversed: ListNode | null = null;

  for (let i = left; i <= right; i++) {
    const nextNode = curr?.next || null;
    curr!.next = reversed;
    reversed = curr;
    curr = nextNode;
  }

  leftNode!.next = reversed;
  sublistTail.next = curr;

  return head;
}

// if (!head || left === right || left > right) return head;

//   let dummy = new ListNode(0, head);

//   let prev = dummy;

//   let curr: ListNode | null = head;

//   for (let i = 1; i < left; i++) {
//     prev = curr!;
//     curr = curr!.next;
//   }

//   let leftStart = prev;
//   let tail = curr;
//   let reversePrev: ListNode | null = null;
//   for (let i = left; i <= right; i++) {
//     let nextNode = curr!.next;
//     curr!.next = reversePrev;
//     reversePrev = curr;
//     curr = nextNode;
//   }

//   leftStart.next = reversePrev;
//   tail!.next = curr;

//   return dummy.next;
