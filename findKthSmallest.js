/** 
 *  We use modified quick sort to find our number. As we already know that in quicksort we fix the position of elements one by one & then move forward.
 *  So here we first apply our partioning logic and get position of the number. If position is equal to k it means that is our desired output.
 *  Else we recursively apply quick sort.
 *  Algo :-
 *  1. find pivot position
 *  2. If position is equal to k then return the number
 *  3 Else if position is greater than k 
 *      we search in left half of array i.e. start --> position -1
 *      else we search in right side i.e. position+1 ----> end
*/
const swap = (array, i, min) => {
  [array[i], array[min]] = [array[min], array[i]];
};
const partioning = (array, start, end) => {
  let pivot = array[end];
  let pIndex = start;
  for (let i = start; i < end; i++) {
    if (array[i] <= pivot) {
      swap(array, i, pIndex);
      pIndex++;
    }
  }
  swap(array, pIndex, end);
  return pIndex;
};
const modifiedQuickSort = (array, k, start, end) => {
  if (start > end) {
    return null;
  }
  let position = partioning(array, start, end);
  if (position === k) {
    return array[k];
  }
  if (position > k) {
    return modifiedQuickSort(array, k, start, position - 1);
  } else {
    return modifiedQuickSort(array, k, position + 1, end);
  }
};
const findKthSmallest = (array, k) => {
  return modifiedQuickSort(array, k - 1, 0, array.length - 1);
};

const findKthLargest = (array, k) => {
  return modifiedQuickSort(array, array.length - k, 0, array.length - 1);
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
