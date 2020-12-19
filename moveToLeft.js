/** Move All 0's to left.
 *  Time Complexity ---> O(n)
 *  Space Complexity ----> O(1)
 *  We maintain two pointer i & j. We start by traversing i & setting answere to array[j].
 *  Algorithm :-
 *  1. We check if array[j] !==0. If true that means that this position is already set. We dont need to do any operation
 *      ----> i++,j++
 *  2.  If array[j]==0. It means we have to move this 0. So we move i pointer to find next non zero element.
 *      ----> i++;
 *      i) If we find non zero element at ith position then we swap with jth position and then increment both the pointer
 */
const swap = (array, start, end) => {
  [array[start], array[end]] = [array[end], array[start]];
};
const moveToLeft = (array) => {
  let i = 0;
  let j = 0;
  while (i <= array.length - 1) {
    if (array[j] !== 0) {
      ++i;
      ++j;
    } else {
      if (array[i] !== 0) {
        swap(array, i, j);
        ++i;
        ++j;
      } else {
        ++i;
      }
    }
  }
  return array;
};

console.log(
  moveToLeft([32, 0, 43, 0, 1, 0, 2, 0, 3, 0, 0, 0, 0, 4, 6, 7, 8, 0, 9])
);
