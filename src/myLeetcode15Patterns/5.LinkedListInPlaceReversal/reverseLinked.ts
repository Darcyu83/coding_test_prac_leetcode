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

export function reverseLinkedRecap(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let curr: ListNode | null = head,
    prev: ListNode | null = null;

  while (curr) {
    // switching direction
    const nextNode: ListNode = curr.next!;
    curr.next = prev;
    // keep node completed
    prev = curr;

    curr = nextNode;
  }

  return prev;
}
