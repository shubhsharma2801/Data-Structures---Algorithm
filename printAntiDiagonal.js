const printAntiDiagonal = (matrix) => {
  for (let i = 0; i < matrix[0].length; i++) {
    let row = 0;
    let col = i;
    while (col >= 0 && row < matrix.length) {
      console.log(matrix[row][col]);
      row++;
      col--;
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    let row = i;
    let col = matrix[0].length - 1;
    while (row < matrix.length) {
      console.log(matrix[row][col]);
      row++;
      col--;
    }
  }
};

printAntiDiagonal([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
