/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const swap = (matrix,x,y,n)=>{
        let temp = matrix[n-y][x];
        matrix[n-y][x] = matrix[n-x][n-y];
        matrix[n-x][n-y] = matrix[y][n-x];
        matrix[y][n-x] = matrix[x][y];
        matrix[x][y] = temp;
    }
    let n = matrix.length -1;
    for(let i=0;i<matrix.length/2;i++){
        for(let j =i;j<n-i;j++){
            swap(matrix,i,j,n);
        }
    }
};