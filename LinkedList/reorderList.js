// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.



// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]


const reorderList = function (head) {

  //iterate over to get the length, and copy the first half, and revese the second half
  // merge two list

  let list = head;
  const arr = []

  while (list) {

    arr.push(list.val);
    list = list.next
  }

  const reorder = [] ;

  while(arr.length) {
    reorder.push(arr.shift());
    if(!arr.length) {
      break;
    }
    reorder.push(arr.pop())
  }

  reorder.shift();

  list = head
  for (let val of reorder) {
    list.next = new ListNode(val);
    list = list.next;
  }
}