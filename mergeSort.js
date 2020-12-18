/** Merge Sort is classic case of Divide & merge algoritm.
 *  In Divide and Conquor stratagey. We dive the problem into simpler parts which in turn are soloution to smaller problem.
 *  And using conquor strategy we combine all the individual solution to form one bigger Solution.
 *  In merge Sort Algorithm. We have two parts.
 *  1. Divide & then merge 
 *  2. Recursively divide the array into left and right subarray. Until only single element array is remaining. Which in itself is sorted.
 *  3. After that we merge left & right subarray. Which are individually sorted.
 *     We will take advantage of the fact that left and right subarrays are sorted.
 *  4. In merging of two array. We usually maintain two pointer.
 *     We check if array at position i < array at position j
 *      then push the element at increment i
 *     else increment j
 */
const merge = (left, right) => {
  let array = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return [...array, ...left, ...right];
};

const mergeSort = (array) => {
  let half = array.length / 2;
  if (array.length < 2) {
    return array;
  }
  let left = array.slice(0, half);
  let right = array.slice(half, array.length);
  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([32, 23, 4, 5, -98, 1]));
