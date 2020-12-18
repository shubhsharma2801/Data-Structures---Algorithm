/** Sort Array consisting of 0, 1's & 2's
 *  So the time complexity expected is O(n) & space complexity O(1)
 *  Can not use extra variable
 *  Algorithm :-
 *  1. Initialize low=0, mid=0, high=array.length -1
 *  2. Loop over array till mid<=high
 *  3. if array[mid] === 0
 *      then swap(array,mid,low)
 *           ++low;++mid;
 *  4. if array[mid] === 1
 *      then mid++
 *  5. if array[mid] === 2
 *      then swap(array,mid,high)
 *          --high
 */

const swap = (array, start, end) => {
  [array[start], array[end]] = [array[end], array[start]];
};

const sortArraySpecial = (array) => {
  let low = 0,
    mid = 0,
    high = array.length - 1;
  while (mid <= high) {
    if (array[mid] === 2) {
      swap(array, mid, high);
      --high;
    } else if (array[mid] === 0) {
      swap(array, low, mid);
      ++mid;
      ++low;
    } else {
      ++mid;
    }
  }
  return array;
};

console.log(sortArraySpecial([1,1,2,2,2,2,0,1,2,0,0,0]))