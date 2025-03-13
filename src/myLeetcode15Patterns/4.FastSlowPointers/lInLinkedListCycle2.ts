// Floyd's tortoise and hare algorithm.

// Cycle Detection: The fast and slow pointers will eventually meet inside the cycle if there is one.
// The slow pointer moves one step at a time, while the fast pointer moves two steps at a time.

// Cycle Start: After detecting the cycle (when slow and fast meet),
// reset the slow pointer to the head of the list and keep the fast pointer at the point where they met.
// Then, move both pointers one step at a time. The point where they meet again will be the start of the cycle.
function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let slow: ListNode | null = head,
    fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow?.next || null;
    fast = fast.next.next;

    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow?.next || null;
        fast = fast?.next || null;
      }

      return slow;
    }
  }
  return null;
}

// time limit exceeded : leetcode

function detectCycle2(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next; // Initialize fast to head.next

  while (fast && fast.next) {
    slow = slow!.next; // Move slow pointer one step
    fast = fast!.next!.next; // Move fast pointer two steps

    if (slow === fast) {
      // Cycle detected
      slow = head; // Start slow from the head again
      while (slow !== fast) {
        // Find the start of the cycle
        slow = slow!.next;
        fast = fast!.next;
      }
      return slow; // Return the start of the cycle
    }
  }

  return null; // No cycle detected
}

function detectCycle3(head: ListNode | null): ListNode | null {
  // 1. using set
  const set = new Set<ListNode>();

  while (head != null) {
    if (!set.add(head)) {
      return head;
    }
    head = head.next;
  }
  return null;
}
