/** 
 * Problem statement state that we have to search in sorted matrix. We will use modified binary search.
 * Algorithm :-
 * 1) Break condition :-
 *      matrix(i,j) === key
 *      i>=array.length || j<0
 * 2) If key < matrix(i,j) ----> go left
 *      j--
 * 3) If key > matrix(i,j) ----> go down
 *      i++;
*/

const searchMatrixHelper = (matrix, key, i, j) => {
  if (i >= matrix.length || j < 0) {
    return null;
  }
  if (matrix[i][j] === key) {
    return { i, j };
  }
  if (key > matrix[i][j]) {
    return searchMatrixHelper(matrix, key, i + 1, j);
  } else {
    return searchMatrixHelper(matrix, key, i, j - 1);
  }
};
const searchMatrix = (matrix, key) => {
  return searchMatrixHelper(matrix, key, 0, matrix[0].length);
};

console.log(
  searchMatrix(
    [
      [10, 20, 30, 40],
      [15, 25, 36, 46],
      [28, 29, 37, 48],
      [32, 33, 39, 50],
    ],
    39
  )
);
