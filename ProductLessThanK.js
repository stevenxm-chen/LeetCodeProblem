// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.



// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0


// Constraints:

// 1 <= nums.length <= 3 * 104
// 1 <= nums[i] <= 1000
// 0 <= k <= 106

var mergeTwoLists = function(list1, list2) {

  if (!list1 && list2) {
    return list2
  } else if (list1 && !list2) {
    return list1
  }

  let list = new ListNode(0);
  let head = list;

  while (list1 || list2) {
    if(!list1 && list2) {
      list.next = new ListNode(list2.val);
      list2 = list2.next;
      list = list.next;
    } else if (!list2 && list1) {
       list.next = new ListNode(list1.val);
      list1 = list1.next;
      list = list.next
    } else {

    if (list1.val < list2.val) {

      list.next = new ListNode(list1.val);
      list = list.next;
      list1 = list1.next;


    }  else if (list1.val === list2.val) {
      list.next = new ListNode(list1.val);
      list1 = list1.next;
      list = list.next;
      list.next = new ListNode(list2.val);
      list2 = list2.next;
      list = list.next
    } else {

      list.next = new ListNode(list2.val);
      list=list.next;
      list2 = list2.next;
    }
  }

  }

  return head.next;
};
