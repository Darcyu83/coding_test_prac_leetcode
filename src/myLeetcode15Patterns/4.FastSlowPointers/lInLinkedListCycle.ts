function hasCycle(head: ListNode | null): boolean {
  // If head is null or only one node exists, there's no cycle
  if (!head || !head.next) return false;

  // Initialize slow and fast pointers
  let slow: ListNode | null = head;
  let fast: ListNode | null = head; // ok
  // let fast: ListNode | null = head.next;

  // Traverse the list with slow moving one step and fast moving two steps
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    // If slow and fast pointers meet, there's a cycle
    if (slow === fast) {
      return true;
    }
  }

  // If fast pointer reaches the end of the list, no cycle exists
  return false;
}
