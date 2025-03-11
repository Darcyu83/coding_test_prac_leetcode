import { ListNode } from "../../utils/listNode";

export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let dummy = new ListNode(0, head);

  let prev = dummy;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (slow && fast) {
    prev.next = fast;
    slow.next = fast.next;
    fast.next = slow;

    prev = slow;
    slow = slow.next || null;
    fast = slow?.next || null;
  }

  return dummy.next;
}

export function swapPairs2(head: ListNode | null): ListNode | null {
  let newHead: ListNode | null = null;

  let prev: ListNode | null = null;
  let slow = head;
  while (slow && slow.next) {
    let fast: ListNode | null = slow.next;
    let temp: ListNode | null = fast;

    slow.next = fast;
    if (temp) {
      temp.next = slow;
    }

    if (prev) {
      (prev as ListNode).next = temp;
    } else {
      newHead = temp;
    }

    prev = slow;
    slow = fast;
  }
  return newHead;
}
