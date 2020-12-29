/** The key here is to use binary search algorithm. 
 *  Algorithm - 
 *  1. use binarysearch(start,end) where start is 0 and end is num itself
 *  2. calculate mid
 *  3. check if mid*mid === num -----> return mid
 *  4. if num< mid * mid ----> search right i.e. start to mid -1
 *  5 else search mid +1 to end
 */
const modifiedBinarySearch = (num, start, end) => {
  let mid = (start + end) / 2;
  if (Math.floor(mid * mid) === num) {
    return Math.floor(mid);
  }
  if (mid * mid > num) {
    return modifiedBinarySearch(num, start, mid - 1);
  } else {
    return modifiedBinarySearch(num, mid + 1, end);
  }
};
const sqrt = (num) => {
  return modifiedBinarySearch(num, 0, num);
};

console.log(sqrt(11));
