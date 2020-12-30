/** Problem statement states that we have to find row with maximum number of 1.
 *  We have multiple ways to solve this problem. But we have been given a condition as sorted. And if we have sorted array. Then we can use binary Search.
 *  So trick here is to iterate over all the row. 
 *  Algorithm :-
 *  1. Iterate over all the row
 *  2. Perform binary Search on all row.
 *  3. We have to find first occurence of 1 in a row. So row.length - 1 will be number of 1 for that particular row.
 *  
 *  Modified BS :-
 *  1. Calculate mid = start + end /2;
 *  2. check if row[mid] === 1 && row[mid - 1] === 0 the return mid
 *  3. Also if mid === 0 return mid as there is only 0 & 1 it does not matter what we return
 *  4. if row[mid] === 1 search left ----> start to mid -1
 *  5 else search right ----> mid + 1 to end
*/
const findFirstOcurrence = (array, start, end) => {
  if (start > end) {
    return;
  }
  const mid = Math.floor((start + end) / 2);
  if (
    (mid === 0 && array[mid] === 1) ||
    (array[mid] === 1 && array[mid - 1] === 0)
  ) {
    return mid;
  }
  if (array[mid] === 1) {
    return findFirstOcurrence(array, start, mid - 1);
  } else {
    return findFirstOcurrence(array, mid + 1, end);
  }
};

const findRowWithMaxOne = (matrix) => {
  let maxCount = 0;
  for (let i = 0; i < matrix.length; i++) {
    maxCount = Math.max(
      maxCount,
      matrix[i].length - findFirstOcurrence(matrix[i], 0, matrix[i].length - 1)
    );
  }
  return maxCount;
};
//console.log(findFirstOcurrence([1], 0, 0));
console.log(
  findRowWithMaxOne([
    [0, 0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
