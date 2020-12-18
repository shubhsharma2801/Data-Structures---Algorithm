/** Find a number in Rotated sorted array.
 *  If a number is rotated there is two sorted sequence.
 *  So as a first step we have to find the mid is in which sequence. And after that make our decision to traverse right or left array.
 *  Algorithm
 *  1. Find Mid
 *  2. if mid == key then return the mid
 *  3. else find the sequence in which mid lies.
 *  4. if arr[mid] > arr[start] ---> left sequence
 *  5. if arr[mid] < arr[start] ---> right sequence
 *  6. if left sequence
 *      i) if key >= array[start] && key <= array[mid] 
 *          --------> search(array,start,mid-1)
 *      ii) else 
 *          --------> search(array,mid+1,end)
 *  7. if right sequence
 *      i) if key > array[mid] && key <array[end]
 *          --------> search(array,mid+1,end)
 *      ii) else 
 *          --------> search(array, start,mid-1)
 *  8. One point to consider is we can only make assumptions about the sequence we are in
 *      For ex:- If we are in left sequence. We are sure that array from start to end is sorted. hence we can use this to search our key 
 */
const findInRotatedArray = (array, key) => {
  return findInRotatedArrayHelper(array, key, 0, array.length -1);
};

const findInRotatedArrayHelper = (array, key, start, end) => {
  if (start > end) {
    return -1;
  }
  //Find mid
  const mid = Math.floor((start + end) / 2);
  if (array[mid] === key) {
    return mid;
  }

  //Find sequence position
  if (array[mid] >= array[start]) {
    //Right sequence
    if (key <= array[mid] && key >= array[start]) {
      return findInRotatedArrayHelper(array, key, start, mid - 1);
    } else {
      return findInRotatedArrayHelper(array, key, mid + 1, end);
    }
  } else {
    //Left sequence
    if (key >= array[mid] && key <= array[end]) {
      return findInRotatedArrayHelper(array, key, mid + 1, end);
    } else {
      return findInRotatedArrayHelper(array, key, start, mid - 1);
    }
  }
};

const array = [3, 4, 5, 6, 7, 8, 1, 2];
console.log(findInRotatedArray(array, 8));
