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

function reverseBetween2(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let leftNodeTail: ListNode | null = null;
  let curr = head;
  for (let i = 1; i < left; i++) {
    leftNodeTail = curr;
    curr = curr?.next || null;
  }

  // 2, 3, 4 => 4 , 3 , 2
  // 2 is tail
  let sublistTail = curr!;
  let reversed: ListNode | null = null;

  for (let i = left; i <= right; i++) {
    const nextNode = curr?.next || null;
    curr!.next = reversed;
    reversed = curr;
    curr = nextNode;
  }

  sublistTail.next = curr;
  if (leftNodeTail) {
    leftNodeTail.next = reversed;
  } else {
    // equals to left 1, entire node reversed
    head = reversed;
  }

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
