import { ListNode } from "../utils/listNode";

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
