import { ListNode } from "../../utils/listNode";

export function reverseLinked(head: ListNode | null): ListNode | null {
  let currNode = head;
  let prev: ListNode | null = null;

  while (currNode) {
    const nextNode = currNode.next;
    currNode.next = prev;
    prev = currNode;
    currNode = nextNode;
  }

  return prev;
}
