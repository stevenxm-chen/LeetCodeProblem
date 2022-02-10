// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.



// Example 1:


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]


// Constraints:

// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {

  //iterate over the list, and push the value to the array, reverst positon and build new list
  if(!head) {
    return null
  }

  let list = head;
  let list2 = head;
  const hash = [];

  while (list) {

    hash.push(list.val);
    list = list.next;
  }

  let front = hash.slice(0, left - 1);
  let back = hash.slice(right);
  let reverse = hash.slice(left - 1, right).reverse();

  const result = front.concat(reverse, back)
  const output = new ListNode()
  let temp = output
  for (let val of result) {
     temp.next = new ListNode(val);
    temp = temp.next;

  }
  return output.next
};