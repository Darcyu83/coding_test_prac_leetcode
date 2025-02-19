// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function makeLinkedNodeHead(length: number) {
  const nodes = [];
  for (let i = 1; i <= length; i++) {
    nodes.push(new ListNode(i));
  }

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1] || null;
  }
  return nodes[0];
}
