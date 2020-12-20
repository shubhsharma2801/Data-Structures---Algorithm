/** The problem statement state that given an array we have to find an element for which all number at left is less & right side is more.
 *  So as it is not sorted array we could not use binary search. So we will try or best with O(n).
 *  Approach ->
 *  We will maintain two array left & right respectively. Left will maintain greatest number from left for number in given index in an array.
 *  Right will maintain minimum value for that index at right side of array.
 *  So after that we will compare for all element that if value in left is lower & right is greater. Then that will be our answere.
 *  On closer look we find that we don't need right array as we need it only for comparing.
 *  Algo :-
 *  1. Create array left
 *      for i+1 ----> array.length
 *      left[i] = max(array[i-1],left[i-1]);
 *  2. create a temp variable to store right
 *     for i= array.length -1 to 0
 *     if(left[i]<array[i] && array[i]> right)
 *          return i
 *      right = min(array[i],right)
 *
 */

const findPivot = (array) => {
  let n = array.length;
  let left = [];
  left[0] = -1000000;
  for (let i = 1; i < n; i++) {
    left[i] = Math.max(array[i - 1], left[i - 1]);
  }
  let right = null;
  console.log(left);
  for (i = n - 1; i >= 0; i--) {
    if (left[i] < array[i] && right > array[i]) {
      return array[i];
    }
    right = right ? Math.min(right, array[i]) : array[i];
  }
  return -1;
};

console.log(findPivot([6, 2, 5, 4, 2, 9, 11, 10, 20]));
