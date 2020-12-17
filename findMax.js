/** Find Max in Increasing Decreasing arry. As Array has a property that array is first incresing then decresing. We will use Binary Search.
 *  I/P :- [12,24,31,55,11,9,8]
 *  O/P :- 55
 *  First we find the mid.At any given position mid element staisfy one of this property
 *  1. arr[mid -1] < arr [mid] && arr[mid] < arr[mid +1] ---> search right
 *  2. arr[mid - 1] > arr[mid] && arr[mid] > arr[mid +1] ---> search left
 *  3. arr[mid] > arr[mid -1] && arr[mid]> arr[mid +1] ---> answere
 *  4. if only two element are present ---> greater of the two
 *  5. Single element is present -----> the element it self
 */

const findMax = (array) => {
  if (array.length === 1) {
    return array[0];
  }
  if (array.length === 2) {
    return array[0] > array[1] ? array[0] : array[1];
  }
  let mid = Math.floor(array.length / 2);
  if (array[mid] > array[mid - 1] && array[mid] > array[mid + 1]) {
    return array[mid];
  } else if (array[mid - 1] < array[mid] && array[mid] < array[mid + 1]) {
    return findMax(array.slice(mid, array.length));
  } else {
    return findMax(array.slice(0, mid));
  }
};

console.log(findMax([6, 9, 15, 25, 35, 50, 41, 29, 23, 8]));
